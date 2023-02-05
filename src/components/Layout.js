/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from "styled-components"
import AboutSection from '../sections/AboutSection'
import HeroSection from '../sections/HeroSection'

/* -------------------------- Internal Dependencies ------------------------- */
import Navigation from './Navigation'

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