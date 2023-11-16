import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import ItemList from '../ItemList'
import { CLOUDFRONT_URL } from '../../main'

/**
 * The banner at the bottom of the page containing external links
 */
export const Footer = () => {
  return (
    <Banner shouldWrapItems shouldInvertGradient>
      <ItemList>
        <IconButton
          isExternal
          title="Pi Lib Monorepo - Github - external link"
          href="https://github.com/lancerael/pi"
          src={`${CLOUDFRONT_URL}/github.svg`}
        />
        <IconButton
          isExternal
          title="Pi Lib Design System - Storybook - external link"
          href="https://pi.lance-taylor.com"
          src={`${CLOUDFRONT_URL}/storybook.svg`}
        />
      </ItemList>
      <ItemList>
        <IconButton
          isExternal
          title="by Lance Taylor - Linkedin - external link"
          href="https://www.linkedin.com/in/lance-taylor-47b85b40"
          src={`${CLOUDFRONT_URL}/linkedin.svg`}
        />
      </ItemList>
    </Banner>
  )
}
export default Footer
