/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from "styled-components"

/* -------------------------- Internal Dependencies ------------------------- */
import Navigation from './Navigation'
import {HeroSection, AboutSection} from '../sections'


const LayOutContainer = styled.div`
    width: 100vw;
    background: #b3b9cb;
`

const Layout = () => {
  return (
    <LayOutContainer>
        <Navigation/>
        <HeroSection />
        <AboutSection/>
    </LayOutContainer>
  )
}

export default Layout