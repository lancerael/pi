import { getTransientProps } from '@pi-lib/utils'
import {
  StyledCard,
  StyledContent,
  StyledHeader,
  StyledSubTitle,
  StyledTitle,
} from './Card.style'
import { CardProps } from './Card.types'
import IconButton from '@pi-lib/icon-button/src/IconButton'

/**
 * Card component for displaying content with an optional title and subtitle.
 * Renders a styled card with a header (if title or subtitle is provided) and content area.
 *
 * @param {CardProps} props - The properties passed to the component.
 * @param {string} [props.title] - The title text for the card. Not displayed if absent.
 * @param {string} [props.subTitle] - The subtitle text for the card. Not displayed if absent.
 * @param {boolean} [props.isClear] - The background of the card is completely transparent.
 * @param {boolean} [props.icon] - The optional icon to use in the card
 * @param {React.ReactNode} props.children - The main content to be displayed inside the card.
 * @returns {React.ReactNode} A styled card element.
 */
export const Card = ({
  title,
  subTitle,
  isClear,
  icon,
  children,
}: CardProps) => {
  return (
    <StyledCard {...getTransientProps({ isClear })}>
      {icon && (
        <div style={{ float: 'left', marginRight: '0.5rem' }}>
          <IconButton {...icon} fontSize="3.2rem" isSimple isIconOnly />
        </div>
      )}
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
