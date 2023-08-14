import { Theme, ThemeList } from '../types'
import {
  truthy,
  createNode,
  compress,
  sanitise,
  flatten,
} from '../helpers/utilities'
import dark from './themes/dark.json'
import light from './themes/light.json'

const themes: ThemeList = { dark, light }

/**
 * Adds CSS to style tag, creating/replacing if necessarry
 *
 * @method addStyleToDom
 *
 * @param selector selector for later identification of style tag
 * @param css the CSS to be added
 * @param replace whether to replace or append new style
 */
const addStyleToDom = (
  selector: string,
  css: string,
  replace?: boolean
): void => {
  const clean = (val: string): string => sanitise(compress(val))
  let styleTag = document.querySelector(`[data-selector=${selector}]`)
  if (styleTag === null) {
    styleTag = createNode('style', '', document.head)
    styleTag.setAttribute('data-selector', selector)
  }
  if (clean(styleTag.innerHTML).match(clean(css)) === null) {
    styleTag.innerHTML = flatten(
      `${truthy(replace) ? '' : styleTag.innerHTML} ${css}`
    )
  }
}

/**
 * Add a custom theme
 *
 * @method addTheme
 *
 * @param themeName the ID for the theme
 * @param theme the object containing the theme
 * @return the new theme
 */
const addTheme = (themeName: string, theme: Theme): Theme =>
  (themes[themeName] = theme)

/**
 * Gets a theme
 *
 * @method getTheme
 *
 * @param themeName the ID for the theme
 * @return the requested theme
 */
const getTheme = (themeName: string): Theme => themes[themeName]

/**
 * Updates the CSS theme variables with the selected theme
 *
 * @method publishTheme
 *
 * @param themeName the ID for the theme
 * @param theme the object containing the theme
 * @return the new theme
 */
const publishTheme = (themeName: string): string => {
  let parsedCss = Object.entries(themes[themeName])
    .map(([key, val]: [string, string]): string => `--${key}: ${val};`)
    .join('')
  parsedCss = `:root { ${parsedCss} }`
  addStyleToDom('pic-variables', parsedCss, true)
  return parsedCss
}

/**
 * Make a theme and add the style to the DOM
 *
 * @method css
 *
 * @param styles the array of template strings
 * @param themes an array of theme values to substitute
 */
const css = (styles: TemplateStringsArray, ...themes: string[]): string => {
  const parsedCss = styles
    .map((style, i) => `${style}${themes[i] ?? ''}`)
    .join('')
  addStyleToDom('pic-styles', parsedCss)
  return parsedCss
}

export { addStyleToDom, addTheme, getTheme, publishTheme, css }
