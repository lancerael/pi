import Button from '@pi-lib/button'
import Card from '@pi-lib/card'
import Icon from '@pi-lib/icon'
import Tooltip from '@pi-lib/tooltip'
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import { useDispatch, useSelector } from 'react-redux'
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import Web3 from 'web3'
import {
  FormFields,
  Web3RootState,
} from '../../state/reducers/web3reducer.types'
import {
  sendTransaction,
  setWalletAddress,
} from '../../state/reducers/web3Reducer'
import { FORM_DEFAULTS, HASH_PATTERN } from '../../constants'
import { FormInputs } from '../TxForm/TxForm.types'
import Toast from '@pi-lib/toast'
import TransactionModal from '../TransactionModal'
import Instructions from '../Instructions'
import { Web3Account } from 'web3-eth-accounts'

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

const web3 = new Web3('http://localhost:8545')

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
  const [dummyAccounts, setDummyAccounts] = useState<Web3Account[]>([])
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

  const createWallet = async () => {
    try {
      const newAccount = await web3.eth.accounts.create()
      await web3.eth.sendTransaction({
        from: (await web3.eth.getAccounts())[0],
        to: newAccount.address,
        value: web3.utils.toWei('1', 'ether'),
        gasPrice: web3.utils.toWei('20', 'gwei'),
      })
      setDummyAccounts((accounts) => [...accounts, newAccount])
    } catch (error) {
      console.error('Error creating wallet:', error)
    }
  }

  useEffect(() => {
    createWallet()
    createWallet()
  }, [])

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
      <Instructions {...{ dummyAccounts }} />
      <TransactionModal
        isActive={isModalActive}
        dismissCallback={closeModal}
        formProps={{ formInputs, setFormInputs, onSubmit: addTransaction }}
      />
      <Toast {...{ toasts }} />
      <Tooltip isActive={isTooltipActive} children={walletAddress} />
    </div>
  )
}

export default Sidebar
