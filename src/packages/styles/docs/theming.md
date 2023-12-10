# Getting started

You need a theme in order to view Pi components in your app.

Themes can be previewed and adjusted on component stories in Storybook. Changes are best viewed on component pages (with a <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="14px" height="14px"><path d="M21.3,28.3L16,23l-5.3,5.3C10.1,28.9,9,28.5,9,27.6V5c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v22.6 C23,28.5,21.9,28.9,21.3,28.3z" fill="none" stroke="#30b2b0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg> icon), rather than markdown docs (with a <svg width="14px" height="14px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="orange" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"/></svg> icon). See the changes by selecting from the `Theme`, `Scheme` and `Size` dropdowns above.

The themes are automatically enabled on the pages for preset themes, shown under `Theming/Themes`.

### Theming Pi

Install `@pi-lib/styles` and use the `Theme` provider:

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@pi-lib/styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider themeName="electron">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
```

Or install the theme on individual components using `withTheme`:

```
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
```

### Light/Dark User Colour Preference

Pi Themes contain both a dark and light colour palette. You can access the props directly from the theme object in styled components as usual.

```
import styled, { css } from 'styled-components'
export const StyledDiv = styled.div(({ theme }) => css`
  color: ${theme.colours.dark.success};
`)
```

But this will only use the dark or light versions of the colour. If you use the CSS variables instead, your colours will be automatically for Light or Dark variations according to the user's local preferences.

```
import styledfrom 'styled-components'
export const StyledDiv = styled.div`
  color: var(--success);
`
```

Try adjusting yours to see the changes when selecting the default scheme from the controls above.

- <a href="https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode" target="_blank">Windows</a>
- <a href="https://support.apple.com/en-us/HT208976" target="_blank">Mac</a>
