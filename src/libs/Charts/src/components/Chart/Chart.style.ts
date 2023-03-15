import { css, box } from '../../theming'

export const style = (): void => {
  css`
    .pic-svg {
      ${box}
      min-width: 512px;
    }

    .pic-title {
      position: absolute;
      width: 100%;
      text-align: center;
      margin: 8px 0;
      font-weight: bold;
      color: var(--text);
    }
  `
}
