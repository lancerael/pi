import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'
import { useDispatch } from 'react-redux'
import { updateContrast, updateTheme } from '../state/reducers/themingReducer'
import { Logo } from '../images/logo'
import styled from 'styled-components'
import Link from '@pi-lib/link'

const StyledHeader = styled.h1`
  display: inline-block;
  font-size: 1.8em;
  padding-left: 4px;
  text-shadow: 1px 1px rgb(0 0 0 / 30%);
  position: relative;

  svg {
    padding-top: 2px;
  }

  @media (max-width: 540px) {
    font-size: 1.5em;
    max-width: 160px;
    line-height: 24px;

    svg {
      padding-top: 10px;
    }
  }
`

const StyledToolbar = styled.div`
  display: flex;
  text-align: right;
  gap: 16px;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 4px;
    & a {
      font-size: 1.3em;
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 4px;
  }
`

const StyledCredit = styled.div`
  text-align: center;
  position: absolute;
  bottom: -8px;
  right: 0px;
  font-size: 14px;
  @media (max-width: 550px) {
    width: 100vw;
    top: 64pxpx;
    left: -20px;
    bottom: auto;
    text-align: center;
  }
`

export const Header = () => {
  return (
    <Banner>
      <StyledHeader>
        <Logo size={48} fill="var(--outline)" /> Pi Tech Demo
        <StyledCredit>
          by{' '}
          <Link
            href="https://www.linkedin.com/in/lance-taylor-47b85b40"
            isExternal
          >
            Lance Taylor
          </Link>
        </StyledCredit>
      </StyledHeader>
      <StyledToolbar>
        <StyledLinks>
          <Link href="/" isMain>
            Sandbox
          </Link>
          <Link href="/candlestick" isMain>
            Candlestick
          </Link>
        </StyledLinks>
      </StyledToolbar>
    </Banner>
  )
}
export default Header
