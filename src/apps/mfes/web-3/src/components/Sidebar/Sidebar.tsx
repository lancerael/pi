import Button from '@pi-lib/button'
import Card from '@pi-lib/card'
import Icon from '@pi-lib/icon'
import Modal from '@pi-lib/modal'
import Tooltip from '@pi-lib/tooltip'
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { useDispatch, useSelector } from 'react-redux'
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import {
  FormFields,
  Web3RootState,
} from '../../state/reducers/web3reducer.types'
import {
  sendTransaction,
  setWalletAddress,
} from '../../state/reducers/web3Reducer'
import TxForm from '../TxForm'
import { FORM_DEFAULTS, HASH_PATTERN } from '../../constants'
import { FormInputs } from '../TxForm/TxForm.types'
import { StyledModalContainer } from './Sidebar.style'
import Toast from '@pi-lib/toast'

const onboard = Onboard({
  wallets: [injectedModule()],
  chains: [
    {
      id: '123456',
      token: 'ETH',
      label: 'Local Ganache',
      rpcUrl: 'http://localhost:8545',
    },
  ],
})

const addTransactionForm = {}

const Sidebar = () => {
  const dispatch = useDispatch()
  const { walletAddress, transactionStatus } = useSelector(
    ({
      web3: {
        walletAddress,
        dataStatus: { transactionStatus },
      },
    }: Web3RootState) => ({
      walletAddress,
      transactionStatus,
    })
  )

  const [formInputs, setFormInputs] = useState<FormInputs>({})
  const [isModalActive, setIsModalActive] = useState(false)
  const [isTooltipActive, setIsTooltipActive] = useState(false)
  const [toasts, setToasts] = useState({})

  const tooltipTimout = useRef<NodeJS.Timeout>()

  const openModal = () => {
    setFormInputs(
      structuredClone({
        ...FORM_DEFAULTS,
        from: {
          ...FORM_DEFAULTS.from,
          value: walletAddress,
        },
      })
    )
    setIsModalActive(true)
  }

  const closeModal = () => {
    setIsModalActive(false)
    setTimeout(() => {
      setFormInputs({})
    }, 200)
  }

  const connectWallet = useCallback(async () => {
    const wallets = await onboard.connectWallet()
    const { label, accounts } = wallets?.[0]
    if (label === 'MetaMask' && accounts?.[0]?.address) {
      dispatch(setWalletAddress(accounts[0].address))
    }
  }, [dispatch])

  const disconnectWallet = useCallback(async () => {
    await onboard.disconnectWallet({ label: 'MetaMask' })
    dispatch(setWalletAddress(''))
  }, [dispatch])

  const addTransaction = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      const transaction: FormFields = Object.entries(formInputs).reduce(
        (tx, [name, { value }]) => ({ ...tx, [name]: value }),
        {}
      )
      console.log(transaction)
      dispatch(sendTransaction(transaction))
      e.preventDefault()
    },
    [dispatch, formInputs]
  )

  const showTooltip = useCallback(() => {
    setIsTooltipActive(true)
    clearTimeout(tooltipTimout.current)
    tooltipTimout.current = setTimeout(() => {
      setIsTooltipActive(false)
    }, 5000)
  }, [setIsTooltipActive])

  useEffect(() => {
    let isSuccess = false
    if (!transactionStatus) return
    if (transactionStatus.match(HASH_PATTERN)) {
      closeModal()
      isSuccess = true
    }
    setToasts((currentToasts) => ({
      ...currentToasts,
      [`toast${Object.keys(toasts).length + 1}`]: {
        timerInterval: 30000,
        title: `Transaction ${isSuccess ? 'Successful' : 'Failed'}`,
        children: (
          <span
            style={{ color: isSuccess ? 'var(--success)' : 'var(--error)' }}
          >
            {transactionStatus}
          </span>
        ),
      },
    }))
  }, [transactionStatus])

  return (
    <div
      style={{
        minWidth: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Card isSolid onMouseOut={() => setIsTooltipActive(false)}>
        <div
          // title={walletAddress}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div
            style={{ color: walletAddress ? 'var(--success)' : 'var(--error)' }}
          >
            {walletAddress ? 'Connected: ' : 'No Wallet Connected'}
          </div>
          <div
            style={{
              textOverflow: walletAddress ? 'ellipsis' : 'none',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              flexGrow: '2',
            }}
            onClick={showTooltip}
            onMouseOver={showTooltip}
          >
            {walletAddress}
          </div>
          {walletAddress && (
            <Button
              isInline
              isCompact
              buttonSize="small"
              title={`Disconnect wallet ${walletAddress}`}
            >
              <Icon
                iconName={'Close'}
                onClick={disconnectWallet}
                color={'var(--error)'}
                iconSize={'1rem'}
              />
            </Button>
          )}
        </div>
      </Card>
      <Button onClick={connectWallet} disabled={!!walletAddress} isInverted>
        Connect Wallet
      </Button>
      <Button
        onClick={openModal}
        disabled={!walletAddress}
        isInverted
        boxName="hi"
      >
        Add Transaction
      </Button>
      <Modal
        isActive={isModalActive}
        isWindowDismissable={false}
        dismissCallback={closeModal}
        title="Transaction Details"
      >
        <StyledModalContainer>
          <TxForm
            {...{ formInputs, setFormInputs, onSubmit: addTransaction }}
          />
        </StyledModalContainer>
      </Modal>
      <Toast {...{ toasts }} />
      <Tooltip isActive={isTooltipActive} children={walletAddress} />
    </div>
  )
}

export default Sidebar
