import { getTransientProps } from '@pi-lib/utils'
import {
  StyledCard,
  StyledContent,
  StyledHeader,
  StyledSubTitle,
  StyledTitle,
  StyledTopSection,
} from './Card.style'
import { CardProps } from './Card.types'
import CustomIcon from '@pi-lib/custom-icon'

/**
 * Card component for displaying content with an optional title and subtitle.
 * Renders a styled card with a header (if title or subtitle is provided) and content area.
 *
 * @param {CardProps} props - The properties passed to the component.
 * @returns {React.ReactNode} A styled card element.
 */
export const Card = ({
  title,
  subTitle,
  isClear,
  iconProps,
  children,
}: CardProps) => {
  return (
    <StyledCard {...getTransientProps({ isClear })}>
      <StyledTopSection>
        {iconProps && <CustomIcon {...iconProps} height="3.2rem" />}
        {(!!title || !subTitle) && (
          <StyledHeader>
            {!!title && <StyledTitle>{title}</StyledTitle>}
            {!!subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
          </StyledHeader>
        )}
      </StyledTopSection>
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  )
}

export default Card
