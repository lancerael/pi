import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import styled from 'styled-components'

const StyledIcons = styled.div`
  display: flex;
  gap: 8px;
`

export const Footer = () => {
  return (
    <Banner isList isBottom>
      <StyledIcons>
        <IconButton
          isExternal
          title="Pi Lib Monorepo - Github - external link"
          href="https://github.com/lancerael/pi"
          src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/github.svg"
        />

        <IconButton
          isExternal
          title="Pi Lib Design System - Storybook - external link"
          href="https://pi.lance-taylor.com"
          src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/storybook.svg"
        />
      </StyledIcons>
      <StyledIcons>
        <IconButton
          isExternal
          title="by Lance Taylor - Linkedin - external link"
          href="https://www.linkedin.com/in/lance-taylor-47b85b40"
          src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/linkedin.svg"
        />
      </StyledIcons>
    </Banner>
  )
}
export default Footer
