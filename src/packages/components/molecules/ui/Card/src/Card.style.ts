import styled, { css } from 'styled-components'
import { StyledCardProps, StyledTopSectionProps } from './Card.style.types'
import {
  DEFAULT_THEME,
  box,
  container,
  getDefaultColorVar,
  maskGradient,
} from '@pi-lib/styles'

export const StyledCard = styled.div<StyledCardProps>(
  ({ $isClear, $isSolid, $boxProps, onClick }) => css`
    color: ${({ theme }) => theme.colors.textSoft};
    min-width: 0;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${!$isClear &&
    css`
      ${$isSolid ? box($boxProps) : container($boxProps)}
      ${$isSolid &&
      !$boxProps &&
      css`
        background: ${getDefaultColorVar('subtleHC')};
      `}
      padding: 1rem;
    `}
    ${!!onClick &&
    css`
      &:hover {
        filter: contrast(110%);
      }
      cursor: pointer;
    `}
  `
)

export const StyledTopSection = styled.div<StyledTopSectionProps>(
  ({ $hasIcon }) => css`
    align-items: center;
    display: flex;
    /* margin: 0 0 0.5rem ${$hasIcon ? '-0.25rem' : 0}; */

    & svg {
      margin-top: -0.2rem;
      padding-right: 0.25rem;
    }
  `
)

export const StyledHeader = styled.div`
  min-width: 0;
  color: ${({ theme }) => theme.colors.text};
`

export const StyledTitle = styled.h2`
  margin: 0;
  padding: 0 0 0.15rem 0 !important;
  color: ${({ theme }) => theme.colors.text};
  ${maskGradient()}
  @media (max-width: 1036px) {
    font-size: 1.2rem;
    padding-top: 0.25rem !important;
  }
`

export const StyledSubTitle = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.special};
`

export const StyledContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

export const StyledIcon = styled.div`
  padding-top: -0.25rem;
  float: left;
  ${maskGradient()}
`

StyledCard.defaultProps = DEFAULT_THEME
StyledHeader.defaultProps = DEFAULT_THEME
StyledTitle.defaultProps = DEFAULT_THEME
StyledSubTitle.defaultProps = DEFAULT_THEME
StyledContent.defaultProps = DEFAULT_THEME
