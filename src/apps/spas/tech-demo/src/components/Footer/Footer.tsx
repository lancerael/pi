import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import ItemList from '../ItemList'

/**
 * The banner at the bottom of the page containing external links
 */
export const Footer = () => {
  const iconButtonProps = {
    isExternal: true,
    iconProps: {
      height: '1.2rem',
    },
  }
  return (
    <Banner hasBackground shouldWrapItems shouldInvertGradient>
      <ItemList>
        <IconButton
          iconProps={{
            ...iconButtonProps,
            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}github.svg`,
          }}
          buttonProps={{
            title: 'Pi Lib Monorepo - Github - external link',
            href: 'https://github.com/lancerael/pi',
          }}
        />
        <IconButton
          iconProps={{
            ...iconButtonProps,
            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}storybook.svg`,
          }}
          buttonProps={{
            title: 'Pi Lib Design System - Storybook - external link',
            href: 'https://pi.lance-taylor.com',
          }}
        />
        <IconButton
          iconProps={{
            ...iconButtonProps,
            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}npm.svg`,
          }}
          buttonProps={{
            title: 'Pi Lib Public Packages - NPM - external link',
            href: 'https://www.npmjs.com/~pi-lib',
          }}
        />
      </ItemList>
      <ItemList>
        <IconButton
          iconProps={{
            ...iconButtonProps,
            src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}linkedin.svg`,
          }}
          buttonProps={{
            title: 'by Lance Taylor - Linkedin - external link',
            href: 'https://www.linkedin.com/in/lance-taylor-47b85b40',
          }}
        />
      </ItemList>
    </Banner>
  )
}
export default Footer
