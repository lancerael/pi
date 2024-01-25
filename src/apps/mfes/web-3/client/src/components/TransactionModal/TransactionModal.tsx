import Modal from '@pi-lib/modal'
import { StyledModalContainer } from './TransactionModal.style'
import TxForm from '../TxForm'

const TransactionModal = ({ isActive, dismissCallback, formProps }: any) => {
  return (
    <Modal
      isWindowDismissable={false}
      title="Transaction Details"
      {...{ isActive, dismissCallback }}
    >
      <StyledModalContainer>
        <TxForm {...formProps} />
      </StyledModalContainer>
    </Modal>
  )
}

export default TransactionModal
