# Getting started

You can use Pi components without a theme. They will default to the `andro` theme. If you want to use an
alternative theme you can use one of the existing themes or create your own. There are several sample ones available. They are listed under `Theming/Themes`.

Themes can be previewed on component stories in Storybook. Changes are best viewed on component pages (with a <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="14px" height="14px"><path d="M21.3,28.3L16,23l-5.3,5.3C10.1,28.9,9,28.5,9,27.6V5c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v22.6 C23,28.5,21.9,28.9,21.3,28.3z" fill="none" stroke="#30b2b0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg> icon), rather than markdown docs (with a <svg width="14px" height="14px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="orange" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"/></svg> icon). See the changes by selecting from the `Theme`, `Scheme` and `Size` dropdowns above. If you change the scheme between light and dark on a docs page, you'll need to set the background in Storybook too.

### Theming Pi

Install `@pi-lib/styles` and use the `Theme` provider, choosing a theme:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from '@pi-lib/styles'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme themeName="electron">
      <App />
    </Theme>
  </React.StrictMode>
)
```

Or install the theme on individual components using `withTheme`:

```jsx
import React from 'react'
import Button from '@pi-lib/button'
import { withTheme } from '@pi-lib/styles'

const Component = () => {
  return <Button>My component.</Button>
}

export default withTheme(Component, 'pebble')
```

### Light/Dark User Colour Preference

Pi Themes contain both a dark and light colour palette. You can access the props directly from the theme object in styled components as usual. The dark/light version will be used according to the user's preferences. You'll need to access the
theme like this for generic components with a default theme.

```jsx
import styled, { css } from 'styled-components'

export const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colours.special};
`
```

If you use the theme provider and aren't making a generic component with default props, you can use the CSS variables instead. Variable colours will also be automatically adjusted for light/dark variations.

```jsx
import styledfrom 'styled-components'
export const StyledDiv = styled.div`
  color: var(--special);
`
```

If you want to provide a UI to allow the user to chose dark/light colour schemes, you can pass this to the `scheme` prop of the `Theme` provider.

```jsx
<Theme themeName="electron" scheme="dark">
  <App />
</Theme>
```

This will override the device settings for light and dark preferences. If you don't provide a value, you will always get the values according to the user's local preferences. Try adjusting yours to see the changes when selecting the default scheme from the controls above.

- <a href="https://learn.microsoft.com/en-us/windows-hardware/customize/desktop/set-dark-mode" target="_blank">Windows</a>
- <a href="https://support.apple.com/en-us/HT208976" target="_blank">Mac</a>
