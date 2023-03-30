const gallery = Object.values(
  import.meta.glob('../images/*.svg', { eager: true, as: 'url' })
)

const getName = (src: string) =>
  src.split('/').pop()?.split('.')[0].toUpperCase().split('-').join(' ')

const URLS: { [key: string]: string } = {
  'AWS AMPLIFY': 'https://aws.amazon.com/amplify',
  'CSS 3': 'https://www.w3.org/TR/CSS',
  'CYPRESS': 'https://www.cypress.io',
  'D3': 'https://d3js.org',
  'GITHUB ACTIONS': 'https://github.com/features/actions',
  'GITHUB': 'https://www.github..com',
  'HTML 5': 'https://html.spec.whatwg.org/',
  'JEST': 'https://jestjs.io/',
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
    <div
      style={{
        background: 'var(--dark)',
        color: 'var(--light)',
        display: 'flex',
        padding: '8px 16px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {gallery.map((src, i) => {
        const title = getName(src)
        return (
          !!title && (
            <a href={URLS[title]} target="_blank">
              <img
                {...{ src, title }}
                key={src}
                width="24px"
                height="24px"
                style={{
                  background: 'var(--specialText)',
                  borderRadius: '15%',
                  padding: '4px',
                }}
              />
            </a>
          )
        )
      })}
    </div>
  )
}
export default Footer
