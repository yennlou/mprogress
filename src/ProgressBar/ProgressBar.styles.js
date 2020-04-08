import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 2px;
`

export const ProgressInner = styled.div`
  position: absolute;
  width: 0%;
  height: 100%;
  background-color: blue;
  transition-property: width;
  transition-duration: .2s;
`
