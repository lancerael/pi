import { getTransientProps } from '@pi-lib/styles'
import {
  StyledCard,
  StyledContent,
  StyledHeader,
  StyledIcon,
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
  ...props
}: CardProps) => {
  const icon = iconProps && (
    <StyledIcon>
      <CustomIcon {...iconProps} height="3.4rem" />
    </StyledIcon>
  )
  const hasHeader = !!title || !!subTitle
  return (
    <StyledCard {...{ ...getTransientProps({ isClear }), ...props }}>
      {hasHeader ? (
        <StyledTopSection>
          {icon}
          <StyledHeader>
            {!!title && <StyledTitle>{title}</StyledTitle>}
            {!!subTitle && <StyledSubTitle>{subTitle}</StyledSubTitle>}
          </StyledHeader>
        </StyledTopSection>
      ) : (
        icon
      )}
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  )
}

export default Card
