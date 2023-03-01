import { useRef, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

const ShowLight = styled.span`
  @media (prefers-color-scheme: dark) {
    display: none;
  }
`
const ShowDark = styled.span`
  @media (prefers-color-scheme: light) {
    display: none;
  }
`

const ThemeDocs = () => {
  const ref = useRef<any>(null)
  const [theme, setTheme] = useState('')

  const camelKey = (name) => {
    const camelPieces = name.split('-')
    return camelPieces.length === 1
      ? name
      : `${camelPieces[0]}${camelPieces[1]
          .charAt(0)
          .toUpperCase()}${camelPieces[1].slice(1)}`
  }

  const onChange = () => {
    setTheme(
      ref.current?.value
        ? JSON.stringify(
            Object.entries(JSON.parse(ref.current.value))
              .filter(([key]) => ['light', 'dark'].includes(key))
              .reduce(
                (acc, [key, val]) => ({
                  ...acc,
                  [key]: (val as any[]).reduce(
                    (acc2, { name, hex }) => ({
                      ...acc2,
                      [camelKey(name)]: hex,
                    }),
                    {}
                  ),
                }),
                {}
              )
          )
        : ''
    )
  }

  const linkProps = {
    target: '_blank',
    style: { color: 'grey' },
  }

  return (
    <div>
      <h3>Theming Pi</h3>
      <div>
        You need a theme in order to view Pi components in your app. The
        available themes can be previewed by selecting from the{' '}
        <code>Themes</code> dropdown above.
        <br />
        <br />
        Install <code>@pi-lib/styles</code> and use the <code>Theme</code>{' '}
        provider:
        <pre>
          {`
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@pi-lib/styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="electron">
      <App />
    </Theme>
  </React.StrictMode>
)
          `}
        </pre>
        Or install the theme on individual components using{' '}
        <code>withTheme</code>:
        <pre>
          {`
import React from 'react'
import Button from '@pi-lib/button'
import { withTheme } from '@pi-lib/styles'

const Component = () => {
  return (
    <Button>
      My component.
    </Button>
  )
}

export default withTheme(Component, 'pebble')
          `}
        </pre>
      </div>
      <div>
        Pi Themes contain both a dark and light colour palette. You can access
        the props directly from the theme object in styled components as usual.
        However it is more powerful to do so via CSS variables, as these are
        automatically substituted for Light or Dark variations according to the
        user's local preferences. Try adjusting yours to see the changes.
        <ul>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode"
              {...linkProps}
            >
              Windows
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-us/HT208976" {...linkProps}>
              Mac
            </a>
          </li>
        </ul>
        You are currently using{' '}
        <strong>
          <ShowLight>Light</ShowLight>
          <ShowDark>Dark</ShowDark>
        </strong>{' '}
        Mode.
      </div>
      <h3>Custom themes</h3>
      <div>
        You can create your own themes by using the converter below.
        <br />
        <br />
        Visit the style generator at{' '}
        <a href="https://theme.numl.design/" {...linkProps}>
          https://theme.numl.design/
        </a>{' '}
        to generate your theme. When you are done, select <em>Colors</em> from
        the output and download the JSON.
        <br />
        <br />
        You can then paste the JSON here to generate a new theme.
        <br />
        <br />
        <strong>INPUT</strong>
        <br />
        <textarea
          {...{ ref, onChange }}
          style={{ width: '400px', height: '200px' }}
        ></textarea>
        <br />
        <br />
        <strong>OUTPUT</strong>
        <br />
        <textarea
          style={{ width: '400px', height: '200px' }}
          value={theme}
          readOnly
        ></textarea>
      </div>
      <h3>Using your theme</h3>
      <div>
        Once converted, copy the output and save it. You can then pass this to
        your imported <em>@pi-lib/styles/getTheme</em> helper to get a{' '}
        <em>theme</em> which you can pass to the imported{' '}
        <em>@pi-lib/styles/Theme</em> provider as a prop.
        <br />
        <pre>
          {`
import customTheme from './local/myThemes/customTheme'
/.../
<Theme themeName="customTheme" theme={customTheme}>
  <App/>
</Theme>
          `}
        </pre>
        <br />
        You should then be able to access your theme from your App. 🎉
        <br />
        <br />
      </div>
    </div>
  )
}

export default {
  title: 'Docs/Theming',
  component: ThemeDocs,
} as ComponentMeta<typeof ThemeDocs>

const Template: ComponentStory<typeof ThemeDocs> = () => <ThemeDocs />

export const ThemeUse = Template.bind({})
