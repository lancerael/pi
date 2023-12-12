## Utilities

There are some utilities available to help with theming.

### getDefaultColorVar

It will let you use a named CSS colour variable, falling back to the default theme (andro).

```jsx
import { getDefaultColorVar } from '@pi-lib/styles'

const bgStyle = getDefaultColorVar('bg') //'var(--bg, #ffffff)'
```

### mixins

Several CSS mixins can be used to enhance your styles.

### `gradient`

A mixin generator for a CSS background gradient.

**Parameters:**

- `to` (optional): Direction of the gradient (default: 'top').
- `name` (optional): Name of the predefined gradient (default: 'default').
- `isTransparent` (optional): Boolean flag for transparency (default: false).

**Example Use:**

```jsx
import styled from 'styled-components'
import { gradient } from './path-to-mixins'

const StyledComponent = styled.div`
  ${gradient({ to: 'right', name: 'blueToGreen', isTransparent: true })}
`
```

### `maskGradient`

A mixin generator for a subtle mask fade effect.

**Parameters:**

- `to` (optional): Direction of the mask gradient (default: 'bottom').

**Example Use:**

```jsx
import styled from 'styled-components'
import { maskGradient } from './path-to-mixins'

const StyledComponent = styled.div`
  ${maskGradient({ to: 'top' })}
`
```

### `shadow`

A mixin generator for a CSS box shadow.

**Parameters:**

- `offset` (optional): Offset of the shadow (default: '2px 2px').
- `opacity` (optional): Opacity of the shadow (default: '0.1').

**Example Use:**

```jsx
import styled from 'styled-components'
import { shadow } from './path-to-mixins'

const StyledComponent = styled.div`
  ${shadow({ offset: '4px 4px', opacity: '0.3' })}
`
```

### `formInput`

A mixin generator for a form input.

**Parameters:**

- `isExpanded` (optional): Boolean flag for expanded input (default: false).

**Example Use:**

```jsx
import styled from 'styled-components'
import { formInput } from './path-to-mixins'

const StyledInput = styled.input`
  ${formInput(true)}
`
```

### `box`

A mixin generator for a boxed container.

**Parameters:**

- `name` (optional): Name of the predefined box color (default: 'default').
- `isInverted` (optional): Boolean flag for inverted colors (default: false).
- `isTransparent` (optional): Boolean flag for transparent background (default: false).
- `shadowProps` (optional): Shadow properties object.

**Example Use:**

```jsx
import styled from 'styled-components'
import { box } from './path-to-mixins'

const StyledBox = styled.div`
  ${box({
    name: 'redToYellow',
    isInverted: true,
    isTransparent: true,
    shadowProps: { offset: '3px 3px' },
  })}
`
```

### `container`

A mixin generator for a box with a shiny background container.

**Example Use:**

```jsx
import styled from 'styled-components'
import { container } from './path-to-mixins'

const StyledContainer = styled.div`
  ${container()}
`
```
