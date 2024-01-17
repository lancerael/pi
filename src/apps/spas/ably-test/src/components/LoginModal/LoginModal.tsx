import { LoginModalContainer, LoginModalTitle } from './LoginModal.style'

const LoginModal = ({ title, children }) => {
  return (
    <>
      <LoginModalTitle>{title}</LoginModalTitle>
      <LoginModalContainer>{children}</LoginModalContainer>
    </>
  )
}

export default LoginModal
