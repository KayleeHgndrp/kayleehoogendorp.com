/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from "styled-components"

/* -------------------------- Internal Dependencies ------------------------- */
import Navigation from './Navigation'

const LayOutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #b3b9cb;

`

const Layout = () => {
  return (
    <LayOutContainer>
        <Navigation/>
    </LayOutContainer>
  )
}

export default Layout