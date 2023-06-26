import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import { ItemList } from './ItemList'

export const Footer = () => {
  return (
    <Banner wrapItems invertGradient>
      <ItemList>
        <IconButton
          isExternal
          title="Pi Lib Monorepo - Github - external link"
          href="https://github.com/lancerael/pi"
          src="https://d3bjzq1zo2el1w.cloudfront.net/github.svg"
        />
        <IconButton
          isExternal
          title="Pi Lib Design System - Storybook - external link"
          href="https://pi.lance-taylor.com"
          src="https://d3bjzq1zo2el1w.cloudfront.net/storybook.svg"
        />
      </ItemList>
      <ItemList>
        <IconButton
          isExternal
          title="by Lance Taylor - Linkedin - external link"
          href="https://www.linkedin.com/in/lance-taylor-47b85b40"
          src="https://d3bjzq1zo2el1w.cloudfront.net/linkedin.svg"
        />
      </ItemList>
    </Banner>
  )
}
export default Footer
