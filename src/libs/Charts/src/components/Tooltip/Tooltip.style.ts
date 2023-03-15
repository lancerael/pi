import { css, box } from '../../theming'

export const style = (): void => {
  css`
    .pic-tooltip {
      transition: opacity 0.5s;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      padding: 8px;
      ${box}
    }
  `
}
