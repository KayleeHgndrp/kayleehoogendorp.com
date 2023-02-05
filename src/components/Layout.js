/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from "styled-components"
import { useInView } from 'react-intersection-observer'

/* -------------------------- Internal Dependencies ------------------------- */
import Navigation from './Navigation'
import {HeroSection, AboutSection, WorkSection} from '../sections'


const LayOutContainer = styled.div`
    width: 100vw;
    background: #b3b9cb;
`

const Layout = () => {
    const {ref: workref, inView: workrefVisible} = useInView({
        triggerOnce: false,
    });

  return (
    <LayOutContainer>
        <Navigation/>
        <HeroSection />
        <AboutSection/>
        <WorkSection ref={workref}/>
    </LayOutContainer>
  )
}

export default Layout