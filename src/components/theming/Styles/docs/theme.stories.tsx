import type { Meta, StoryObj } from '@storybook/react'
import styled from 'styled-components'
import { CodeFormat, PreFormat, Title } from './formatters.style'

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
  const linkProps = {
    target: '_blank',
    style: { color: 'grey' },
  }

  return (
    <div>
      <Title>Theming Pi</Title>
      <div>
        You need a theme in order to view Pi components in your app. The
        available themes are shown under <CodeFormat>Theme/Themes</CodeFormat>.
        <br /> Themes can be previewed on most pages in Storybook by selecting
        from the <CodeFormat>Theme</CodeFormat> dropdown above.
        <br />
        <br />
        Install <CodeFormat>@pi-lib/styles</CodeFormat> and use the{' '}
        <CodeFormat>Theme</CodeFormat> provider:
        <PreFormat>
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
        </PreFormat>
        Or install the theme on individual components using{' '}
        <CodeFormat>withTheme</CodeFormat>:
        <PreFormat>
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
        </PreFormat>
      </div>

      <Title>Light/Dark User Colour Preference</Title>
      <div>
        Pi Themes contain both a dark and light colour palette. You can access
        the props directly from the theme object in styled components as usual.
        <PreFormat>
          {`
import styled, { css } from 'styled-components'
export const StyledDiv = styled.div(({ theme }) => css\`
  color: \${theme.colours.dark.success};
\`)
          `}
        </PreFormat>
        But this will only use the dark or light versions of the colour. If you
        use the CSS variables instead, your colours will be automatically
        substituted for Light or Dark variations according to the user's local
        preferences.
        <PreFormat>
          {`
import styledfrom 'styled-components'
export const StyledDiv = styled.div\`
  color: var(--success);
\`
          `}
        </PreFormat>
        Try adjusting yours to see the changes.
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
        <CodeFormat>
          Your device is currently using{' '}
          <strong>
            <ShowLight>Light</ShowLight>
            <ShowDark>Dark</ShowDark>
          </strong>{' '}
          Mode.
        </CodeFormat>
      </div>
      <br />
    </div>
  )
}

const meta: Meta<typeof ThemeDocs> = {
  title: 'Theme/Docs',
  component: ThemeDocs,
}

export default meta

export const ThemeUse: StoryObj<typeof ThemeDocs> = {}
