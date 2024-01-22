import Modal from '@pi-lib/modal'
import { ethers } from 'ethers'
import { StyledReceipt, StyledTitle, StyledValue } from './ReceiptModal.style'

const ReceiptModal = ({
  isActive,
  dismissCallback,
  activeTransaction: { from, to, value, hash },
}: any) => {
  return (
    <Modal
      title="Transaction Details"
      {...{ isActive, dismissCallback }}
      isWindowDismissable={false}
    >
      <StyledReceipt>
        <table>
          <tbody>
            <tr>
              <StyledTitle>Amount</StyledTitle>
              <StyledValue>
                {ethers.formatEther(Number(value ?? 0))} ETH
              </StyledValue>
            </tr>
            <tr>
              <StyledTitle>From</StyledTitle>
              <StyledValue>{from}</StyledValue>
            </tr>
            <tr>
              <StyledTitle>To</StyledTitle>
              <StyledValue>{to}</StyledValue>
            </tr>
            <tr>
              <StyledTitle>Hash</StyledTitle>
              <StyledValue>{hash}</StyledValue>
            </tr>
          </tbody>
        </table>
      </StyledReceipt>
    </Modal>
  )
}

export default ReceiptModal
