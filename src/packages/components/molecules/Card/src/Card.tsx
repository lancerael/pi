import {
  StyledCard,
  StyledContent,
  StyledHeader,
  StyledSubTitle,
  StyledTitle,
} from './Card.style'
import { CardProps } from './Card.types'

/**
 *
 * @returns
 */
export const Card = ({ title, subTitle, children }: CardProps) => {
  return (
    <StyledCard>
      {(!!title || !subTitle) && (
        <StyledHeader>
          {!!title && <StyledTitle>{title}</StyledTitle>}
          {!!subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
        </StyledHeader>
      )}
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  )
}

export default Card
