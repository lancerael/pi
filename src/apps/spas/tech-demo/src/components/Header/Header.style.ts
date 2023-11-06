import styled, { css } from 'styled-components'
import { ReactSVG } from 'react-svg'
import { themeList, themes, Scheme, CustomStyledType } from '@pi-lib/styles'

/**
 * Wrapper element for the logo & title
 */
export const StyledHeader = styled.h1`
  display: inline-block;
  font-size: 1.2em;
  padding-left: 4px;
  text-shadow: 1px 1px rgb(0 0 0 / 30%);
  position: relative;
  margin: 0;

  svg {
    padding-top: 8px;
  }
`

/**
 * Wrapper element for the toolbar
 */
export const StyledToolbar = styled.div`
  display: flex;
  gap: 16px;
  min-height: 32px;
  align-items: center;
`

/**
 * Wrapper element for the links - hides at narrow views
 */
export const StyledLinks = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 700px) {
    display: none;
  }
`

/**
 * Wrapper for the dropdown links - hides at wide view
 */
export const StyledMenu = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
`

/**
 * Icon to show the info modal
 */
export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-x: auto;
  margin: -16px;
`

/**
 * Palette icon
 */
export const StyledPalette: CustomStyledType<
  HTMLElement,
  { src: string }
> = styled(ReactSVG)`
  svg {
    fill: var(--textSoft);
    width: 1em;
    height: 1em;
    margin-top: 1px;
  }
`

/**
 * The select menu that contains the theme options
 */
export const StyledSelect = styled.div<{ scheme: Scheme }>(({ scheme }) =>
  themeList.map((theme, i) => {
    const { subtle, specialBg } = themes[theme][scheme]
    return css`
      option:nth-of-type(${i + 1}) {
        background-color: ${subtle};
        color: ${specialBg};
      }
    `
  })
)
