# Button

NPM: [@pi-lib/button](https://www.npmjs.com/package/@pi-lib/button)

A simple React button component, styled via Pi theme.

Takes these standard HTML/React props:

    'onPointerUp' | 'onMouseOver' | 'onMouseOut' | 'disabled' | 'children' | 'title'

And these additional custom React props:

```
  /**
   * The data-selector for the button
   */
  dataSelector?: string
  /**
   * It denotes the status of the button (sucess, error, pending or default)
   */
  status?: Status
  /**
   * Show a compact version of the button
   */
  isCompact?: boolean
  /**
   * Show a special version of the button
   */
  isSpecial?: boolean
```
