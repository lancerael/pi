import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import { ItemList } from './ItemList'

export const Footer = () => {
  return (
    <Banner isList isBottom>
      <ItemList>
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
      </ItemList>
      <ItemList>
        <IconButton
          isExternal
          title="by Lance Taylor - Linkedin - external link"
          href="https://www.linkedin.com/in/lance-taylor-47b85b40"
          src="https://pi-lib-assets.s3.eu-west-2.amazonaws.com/linkedin.svg"
        />
      </ItemList>
    </Banner>
  )
}
export default Footer
