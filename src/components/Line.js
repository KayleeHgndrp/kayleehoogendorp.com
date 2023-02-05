/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from 'styled-components'

const LineContainer = styled.span`
    height: 1px;
    background-color: hsla(0,0%,100%,.2);
    width: 100%;
    display: inline-block;
`

const Line = () => {
  return (
    <LineContainer id='line'></LineContainer>
  )
}

export default Line