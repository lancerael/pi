# Table


NPM: [@pi-lib/table](https://www.npmjs.com/package/@pi-lib/table)

An expandable table, styled via Pi theme.

Takes these custom react props:

```
  /**
   * An array of headers for the table
   */
  headers?: string[]
  /**
   * An array of rows containing columns and content
   */
  rows: Omit<RowProps, 'i'>[]
  /**
   * A map of custom column widths
   */
  fixedWidths?: {
    /**
     * An array of cell contents
     */
    cols: (JSX.Element | string)[]
    /**
     * The index for the row
     */
    i: number
    /**
     * Any content that ca be expanded
     */
    expandedContent?: JSX.Element
  }
```