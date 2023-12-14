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

    @media (max-width: 640px) {
      left: 5%;
    }
  }

  & img:nth-of-type(2) {
    transform: rotate(-17deg);
    left: 20%;
    z-index: 100;
  }

  & img:nth-of-type(3) {
    transform: rotate(10deg);
    left: 52%;
    top: 10%;
    z-index: 101;

    @media (max-width: 640px) {
      left: 47%;
      width: 40vw;
      top: 20%;
      transform: rotate(-20deg);
    }
  }
`

export const StyledLinkWrapper = styled.div`
  flex: 1;
  background: var(--darkA);
  border-radius: 5px;

  & :hover {
    background: var(--borderA);
    border-radius: 5px;
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
