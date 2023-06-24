# Custom themes

You can create themes from scratch if you follow this format.

```
export const themeName = {
  light: {
    bg: 'color',
    text: 'color',
    textSoft: 'color',
    textStrong: 'color',
    subtle: 'color',
    border: 'color',
    shadow: 'color',
    input: 'color',
    outline: 'color',
    mark: 'color',
    special: 'color',
    specialBg: 'color',
    specialText: 'color',
    specialShadow: 'color',
    specialMark: 'color',
    light: 'color',
    dark: 'color',
  },
  dark: {
    bg: 'color',
    text: 'color',
    textSoft: 'color',
    textStrong: 'color',
    subtle: 'color',
    border: 'color',
    shadow: 'color',
    input: 'color',
    outline: 'color',
    mark: 'color',
    special: 'color',
    specialBg: 'color',
    specialText: 'color',
    specialShadow: 'color',
    specialMark: 'color',
    light: 'color',
    dark: 'color',
  },
}
```

### Theme generation

You can also generate themes by using the converter below.

Visit the style generator at <a href="https://theme.numl.design/" target="_blank">https://theme.numl.design/</a> to generate your theme. When you are done, select <em>Colors</em> from the output and download the JSON. You can then paste the JSON here to generate a new theme. Paste the JSON into the `INPUT` and take the theme from the `output`

All existing themes are made using this process.