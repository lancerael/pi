import { StyledFullGradient } from '@/app/page.style'
import IconButton from '@pi-lib/icon-button'
import { memo } from 'react'

/**
 * The banner at the bottom of the page containing external links
 */
export const Footer = memo(() => {
  return (
    <StyledFullGradient
      className="pi-page-grid-full"
      style={{ marginTop: '3rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <IconButton
            iconProps={{
              height: '2.2rem',
              src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}github.svg`,
            }}
            buttonProps={{
              title: 'Pi Lib Monorepo - Github - external link',
              href: 'https://github.com/lancerael/pi',
              boxName: 'light',
              isExternal: true,
            }}
          />
          <IconButton
            iconProps={{
              height: '2.2rem',
              src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}storybook.svg`,
            }}
            buttonProps={{
              title: 'Pi Lib Design System - Storybook - external link',
              href: 'https://pi.lance-taylor.com',
              boxName: 'light',
              isExternal: true,
            }}
          />
          <IconButton
            iconProps={{
              height: '2.2rem',
              src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}npm.svg`,
            }}
            buttonProps={{
              title: 'Pi Lib Public Packages - NPM - external link',
              href: 'https://www.npmjs.com/~pi-lib',
              boxName: 'light',
              isExternal: true,
            }}
          />
        </div>
        <div>
          <IconButton
            iconProps={{
              height: '2.2rem',
              src: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}linkedin.svg`,
            }}
            buttonProps={{
              title: 'by Lance Taylor - Linkedin - external link',
              href: 'https://www.linkedin.com/in/lance-taylor-47b85b40',
              boxName: 'light',
              isExternal: true,
            }}
          />
        </div>
      </div>
    </StyledFullGradient>
  )
})

export default Footer
