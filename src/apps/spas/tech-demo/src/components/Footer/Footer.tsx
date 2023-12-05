import PageBanner from '@pi-lib/page-banner'
import IconButton from '@pi-lib/icon-button'
import ItemList from '../ItemList'
import { CLOUDFRONT_URL } from '../../main'

/**
 * The banner at the bottom of the page containing external links
 */
export const Footer = () => {
  return (
    <PageBanner hasBackground shouldWrapItems shouldInvertGradient>
      <ItemList>
        <IconButton
          iconProps={{
            height: '2.2rem',
            src: `${CLOUDFRONT_URL}/github.svg`,
          }}
          buttonProps={{
            isExternal: true,
            boxName: 'light',
            title: 'Pi Lib Monorepo - Github - external link',
            href: 'https://github.com/lancerael/pi',
          }}
        />
        <IconButton
          iconProps={{
            height: '2.2rem',
            src: `${CLOUDFRONT_URL}/storybook.svg`,
          }}
          buttonProps={{
            isExternal: true,
            boxName: 'light',
            title: 'Pi Lib Design System - Storybook - external link',
            href: 'https://pi.lance-taylor.com',
          }}
        />
        <IconButton
          iconProps={{
            height: '2.2rem',
            src: `${CLOUDFRONT_URL}/npm.svg`,
          }}
          buttonProps={{
            isExternal: true,
            boxName: 'light',
            title: 'Pi Lib Public Packages - NPM - external link',
            href: 'https://www.npmjs.com/~pi-lib',
          }}
        />
      </ItemList>
      <ItemList>
        <IconButton
          iconProps={{
            height: '2.2rem',
            src: `${CLOUDFRONT_URL}/linkedin.svg`,
          }}
          buttonProps={{
            isExternal: true,
            boxName: 'light',
            title: 'by Lance Taylor - Linkedin - external link',
            href: 'https://www.linkedin.com/in/lance-taylor-47b85b40',
          }}
        />
      </ItemList>
    </PageBanner>
  )
}
export default Footer
