# Select

NPM: [@pi-lib/select](https://www.npmjs.com/package/@pi-lib/select)

A simple React select component, styled via Pi theme.

Takes these HTML/React props:

    'onChange' | 'onClick' | 'onMouseOver' | 'onMouseOut' | 'title' | 'value' | 'name'

And these additional react props:

```
  /**
   * A label for the select input
   */
  label?: string
  /**
   * A list of options
   */
  options: {
    /**
     * Visible content for the option
     */
    content: string
    /**
     * A value for the option
     */
    value?: string
  }
```
