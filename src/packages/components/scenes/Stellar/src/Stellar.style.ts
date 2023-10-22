import styled from 'styled-components'

export const StyledStellar = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
  overflow: clip;
`

export const StyledStar = styled.div`
  width: 5px;
  height: 5px;
  background: #fff;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 1);
  transition: all 0.5s linear;
`
