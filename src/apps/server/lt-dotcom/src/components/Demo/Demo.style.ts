import styled from 'styled-components'

export const StyledImages = styled.div`
  position: relative;
  min-height: 45vw;
  margin-top: 3rem;

  @media (min-width: 640px) {
    min-height: 16vw;
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
    left: 1.8rem;
    z-index: 99;

    @media (max-width: 640px) {
      left: 5%;
    }
  }

  & img:nth-of-type(2) {
    transform: rotate(-17deg);
    left: 23%;
    z-index: 100;
  }

  & img:nth-of-type(3) {
    transform: rotate(10deg);
    left: 52%;
    top: 10%;
    z-index: 101;

    @media (max-width: 640px) {
      left: 50%;
      width: 40vw;
      top: 20%;
      transform: rotate(-20deg);
    }
  }
`

export const StyledBlurb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & ul {
    margin: 1rem;

    & li {
      font-weight: bold;
      color: var(--special);
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
