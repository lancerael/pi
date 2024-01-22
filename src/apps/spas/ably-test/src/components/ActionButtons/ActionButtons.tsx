import Button from '@pi-lib/button'
import { StyledActionButtons } from './ActionButtons.style'

const ActionButtons = ({ handlers, isLoggedIn }) => {
  const actions = isLoggedIn
    ? {
        logout: 'makeQuery',
      }
    : {
        signup: 'setModal',
        login: 'setModal',
      }
  return (
    <StyledActionButtons>
      {Object.entries(actions).map(([action, handler]) => (
        <Button key={action} onClick={() => handlers[handler](action)}>
          <span style={{ textTransform: 'capitalize' }}>{action}</span>
        </Button>
      ))}
    </StyledActionButtons>
  )
}

export default ActionButtons
