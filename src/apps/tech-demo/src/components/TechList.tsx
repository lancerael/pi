import IconButton from '@pi-lib/icon-button'
import { ItemList } from './ItemList'

const source = 'https://d3bjzq1zo2el1w.cloudfront.net'

const ICONS: { [key: string]: string } = {
  'AWS AMPLIFY': 'https://aws.amazon.com/amplify',
  'AWS API GATEWAY': 'https://aws.amazon.com/api-gateway',
  'AWS CLOUDFRONT': 'https://aws.amazon.com/cloudfront',
  'AWS CLOUDWATCH': 'https://aws.amazon.com/cloudwatch',
  'AWS LAMBDA': 'https://aws.amazon.com/lambda',
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

export const Footer = () => {
  return (
    <div style={{ padding: '12px' }}>
      <ItemList doWrap>
        {Object.entries(ICONS).map(([title, href], i) => {
          const src = `${source}${title.split(' ').join('-').toLowerCase()}.svg`
          return (
            !!title && (
              <IconButton key={title} isExternal {...{ src, href, title }} />
            )
          )
        })}
      </ItemList>
    </div>
  )
}
export default Footer
