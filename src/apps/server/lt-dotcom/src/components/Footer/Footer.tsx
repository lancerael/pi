import { StyledFullGradient } from '@/app/page.style'
import IconButton from '@pi-lib/icon-button'

/**
 * The banner at the bottom of the page containing external links
 */
export const Footer = () => {
  const iconButtonProps = {
    isExternal: true,
    iconProps: {
      height: '2.2rem',
    },
  }
  return (
    <StyledFullGradient className="pi-page-grid-full">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <IconButton
            {...iconButtonProps}
            title="Pi Lib Monorepo - Github - external link"
            href="https://github.com/lancerael/pi"
            src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}github.svg`}
          />
          <IconButton
            {...iconButtonProps}
            title="Pi Lib Design System - Storybook - external link"
            href="https://pi.lance-taylor.com"
            src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}storybook.svg`}
          />
          <IconButton
            {...iconButtonProps}
            title="Pi Lib Public Packages - NPM - external link"
            href="https://www.npmjs.com/~pi-lib"
            src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}npm.svg`}
          />
        </div>
        <div>
          <IconButton
            {...iconButtonProps}
            title="by Lance Taylor - Linkedin - external link"
            href="https://www.linkedin.com/in/lance-taylor-47b85b40"
            src={`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}linkedin.svg`}
          />
        </div>
      </div>
    </StyledFullGradient>
  )
}
export default Footer
