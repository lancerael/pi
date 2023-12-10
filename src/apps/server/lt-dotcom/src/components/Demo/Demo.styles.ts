import styled from 'styled-components'

export const StyledImages = styled.div`
  position: relative;
  min-height: 45vw;

  @media (min-width: 640px) {
    min-height: 18vw;
  }

  & img {
    width: 45%;
    box-shadow: 0px 0px 10px 1px black;
    position: absolute;
    top: 0px;

    @media (max-width: 640px) {
      width: 48vw;
      top: 1rem;
    }
  }

  & img:nth-of-type(1) {
    transform: rotate(17deg);
    left: 1.5rem;
    z-index: 99;
  }

  & img:nth-of-type(2) {
    transform: rotate(-17deg);
    left: 22%;
    z-index: 100;
  }

  & img:nth-of-type(3) {
    transform: rotate(10deg);
    left: 52%;
    top: 10%;
    z-index: 101;

    @media (max-width: 640px) {
      left: 40%;
    }
  }
`

export const StyledLinkWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.darkA};
  border-radius: 5px;

  & :hover {
    background: ${({ theme }) => theme.colors.subtleA};
  }

  & a {
    text-align: center;
    display: inline;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
`
