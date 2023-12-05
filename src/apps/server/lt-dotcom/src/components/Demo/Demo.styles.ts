import styled from 'styled-components'

export const StyledImages = styled.div`
  position: relative;
  min-height: 18vw;

  @media (max-width: 640px) {
    min-height: 30vw;
  }

  & img {
    width: 20vw;
    box-shadow: 0px 0px 10px 1px black;
    position: absolute;
    transform: rotate(23deg);
    top: -20px;

    @media (max-width: 640px) {
      width: 40vw;
    }
  }

  & img:nth-of-type(2) {
    transform: rotate(-23deg);
    left: 10vw;
    z-index: 100;
  }

  & img:nth-of-type(3) {
    left: 16vw;
    top: 2vw;
    z-index: 101;

    @media (max-width: 640px) {
      left: 40vw;
      top: 0px;
    }
  }
`
