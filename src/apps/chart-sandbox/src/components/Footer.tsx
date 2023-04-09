import Banner from '@pi-lib/banner'
import IconButton from '@pi-lib/icon-button'
import styled from 'styled-components'

const S3 = 'https://pi-lib-assets.s3.eu-west-2.amazonaws.com/'

const ICONS: { [key: string]: string } = {
  'AWS AMPLIFY': 'https://aws.amazon.com/amplify',
  'AWS S3': 'https://aws.amazon.com/s3',
  'CSS 3': 'https://www.w3.org/TR/CSS',
  'CYPRESS': 'https://www.cypress.io',
  'D3': 'https://d3js.org',
  'GITHUB ACTIONS': 'https://github.com/features/actions',
  'GITHUB': 'https://www.github..com',
  'HTML 5': 'https://html.spec.whatwg.org/',
  'NODE': 'https://nodejs.org/',
  'NPM': 'https://www.npmjs.com/',
  'NX': 'https://nx.dev/',
  'PNPM': 'https://pnpm.io/',
  'REACT': 'https://react.dev/',
  'REDUX': 'https://redux.js.org/',
  'STORYBOOK': 'https://storybook.js.org/',
  'STYLED COMPONENTS': 'https://styled-components.com/',
  'SVG': 'https://www.w3.org/Graphics/SVG/',
  'TYPESCRIPT': 'https://www.typescriptlang.org/',
  'VISUAL STUDIO CODE': 'https://code.visualstudio.com/',
  'VITE': 'https://vitejs.dev/',
  'VITEST': 'https://vitest.dev/',
}

const StyledLink = styled.a`
  color: var(--outline);

  &:hover {
    color: var(--specialText);
    background: var(--specialShadow);
  }
`

export const Footer = () => {
  return (
    <Banner isList isBottom>
      {Object.entries(ICONS).map(([title, href], i) => {
        const src = `${S3}${title.split(' ').join('-').toLowerCase()}.svg`
        return (
          !!title && (
            <IconButton key={title} isExternal {...{ src, href, title }} />
          )
        )
      })}
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          margin: '8px 8px 0 8px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          Tech Demo by{' '}
          <StyledLink
            href="https://www.linkedin.com/in/lance-taylor-47b85b40"
            target="_blank"
          >
            Lance Taylor
          </StyledLink>
        </div>
        <div>
          Pi Lib:{' '}
          <StyledLink href="https://github.com/lancerael/pi" target="_blank">
            Github Monorepo
          </StyledLink>{' '}
          /{' '}
          <StyledLink
            href="https://main.d3nmdhmk6s7nee.amplifyapp.com"
            target="_blank"
          >
            Storybook Docs
          </StyledLink>
        </div>
      </div>
    </Banner>
  )
}
export default Footer