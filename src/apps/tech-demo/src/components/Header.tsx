import Select from '@pi-lib/select'
import Banner from '@pi-lib/banner'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  updatePage,
  updateContrast,
  updateTheme,
} from '../state/reducers/settingsReducer'
import { Logo } from '../images/logo'
import Link from '@pi-lib/link'
import CollapsibleMenu from '@pi-lib/collapsible-menu'

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
  const dispatch = useDispatch()
  const { page } = useSelector(({ settings }: any) => settings)
  return (
    <Banner>
      <StyledHeader>
        <Logo size={48} fill="var(--outline)" /> Pi Tech Demo
      </StyledHeader>
      <StyledToolbar>
        <StyledLinks>
          <Link
            to="/"
            onClick={() => dispatch(updatePage('/'))}
            $isMain
            $isInactive={page === '/'}
          >
            Sandbox
          </Link>
          <Link
            to="/candlestick"
            onClick={() => dispatch(updatePage('/candlestick'))}
            $isMain
            $isInactive={page === '/candlestick'}
          >
            Candlestick
          </Link>
          <CollapsibleMenu
            isSettings
            items={[
              <Select
                label="Contrast"
                name="contrast"
                onChange={(e: any) => dispatch(updateContrast(e.target.value))}
                options={[
                  { value: '', content: 'Default' },
                  { content: 'Dark' },
                  { content: 'Light' },
                ]}
              />,
              <Select
                label="Theme"
                name="theme"
                onChange={(e: any) => dispatch(updateTheme(e.target.value))}
                options={[
                  { content: 'Andro' },
                  { content: 'Avocado' },
                  { content: 'Electron' },
                  { content: 'Pebble' },
                  { content: 'Rose' },
                ]}
              />,
            ]}
          />
        </StyledLinks>
      </StyledToolbar>
    </Banner>
  )
}
export default Header
