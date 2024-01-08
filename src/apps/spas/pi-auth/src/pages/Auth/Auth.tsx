import PageGrid from '@pi-lib/page-grid'
import Card from '@pi-lib/card'
import Button from '@pi-lib/button'
import Modal from '@pi-lib/modal'
import PageLoader from '@pi-lib/page-loader'
import Toast from '@pi-lib/toast'
import { useState } from 'react'
import UserForm from '../../components/UserForm'
import {
  API_URL,
  ENDPOINT_METHODS,
  FORM_DEFAULTS,
  SUCCESS_MESSAGES,
} from './Auth.constants'
import { debounce } from '@pi-lib/utils'
import { Endpoints } from './Auth.types'
import Status from '../../components/Status'
import LoginModal from '../../components/LoginModal'
import ActionButtons from '../../components/ActionButtons/ActionButtons'

let queryCount = 0

export const Auth = () => {
  const [accessToken, setAccessToken] = useState('')
  const [flagTracker, setFlagTracker] = useState({
    isLoggedIn: false,
    isLoading: false,
    isModalActive: false,
  })
  const [formInputs, setFormInputs] = useState({})
  const [formType, setFormType] = useState('signup')
  const [toasts, setToasts] = useState({})

  const setFlag = (newVal: { [key in keyof typeof flagTracker]?: boolean }) => {
    setFlagTracker((flags) => ({ ...flags, ...newVal }))
  }

  const setModal = (type?: keyof typeof FORM_DEFAULTS) => {
    if (!type) {
      setFormInputs({})
      setFlag({ isModalActive: false })
      return
    }
    setFormType(type)
    setFormInputs(structuredClone(FORM_DEFAULTS[type].state))
    setFlag({ isModalActive: true })
  }

  const makeQuery = debounce(async (type: Endpoints = 'login') => {
    setFlag({ isLoading: true })
    const method = ENDPOINT_METHODS[type]
    const headers = {
      'Content-Type': ['signup', 'login'].includes(type)
        ? 'application/json'
        : undefined,
      'authorization': ['validate', 'logout'].includes(type)
        ? `Bearer ${accessToken}`
        : undefined,
    }
    const body = method === 'POST' ? JSON.stringify(formInputs) : undefined
    let statusProps

    try {
      const response = await fetch(`${API_URL}/auth/${type}`, {
        method,
        headers,
        body,
        credentials: 'include',
      })

      const result = await response.text()

      if (!response.ok) {
        statusProps = {
          children: `${result ?? 'Network request failed'} ❌`,
        }
      } else {
        setModal()
        const isSuccess = !['Unauthorized', 'Forbidden'].includes(result)
        statusProps = {
          children: isSuccess ? SUCCESS_MESSAGES[type] : result,
          isSuccess,
        }
        if (['login', 'refresh'].includes(type)) {
          setAccessToken(result)
          setFlag({ isLoggedIn: true })
        }
        if (type === 'logout') {
          setFlag({ isLoggedIn: false })
        }
      }
    } catch (error) {
      statusProps = {
        children: `${error.toString()} ❌`,
      }
    } finally {
      setToasts((currentToasts) => ({
        ...currentToasts,
        [`toast${++queryCount}`]: {
          timerInterval: 15000,
          children: (
            <>
              Request #{queryCount}: {type} - <Status {...statusProps} />
            </>
          ),
        },
      }))
      setFlag({ isLoading: false })
    }
  }, 500)

  const { isLoggedIn, isLoading, isModalActive } = flagTracker

  return (
    <>
      <PageGrid>
        <div style={{ margin: '2rem 0' }}>
          <Card
            isSolid
            title="Pi Auth Demo App"
            subTitle={
              <>
                Status:{' '}
                <Status isSuccess={isLoggedIn}>
                  Logged {isLoggedIn ? 'in' : 'out'}
                </Status>
              </>
            }
          >
            <ActionButtons handlers={{ setModal, makeQuery }} />
          </Card>
        </div>
      </PageGrid>
      <Modal
        isDismissed={!isModalActive}
        dismissCallback={() => setFlag({ isModalActive: false })}
      >
        <LoginModal title={FORM_DEFAULTS[formType].title}>
          <UserForm {...{ formInputs, setFormInputs }} />
          <Button
            onClick={() => makeQuery(formType)}
            disabled={!Object.values(formInputs).every(Boolean)}
          >
            Submit
          </Button>
        </LoginModal>
      </Modal>
      <Toast {...{ toasts }} />
      <PageLoader isActive={isLoading} />
    </>
  )
}

export default Auth
