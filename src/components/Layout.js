/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled , {ThemeProvider} from "styled-components"
import { useInView } from 'react-intersection-observer'

/* -------------------------- Internal Dependencies ------------------------- */
import Navigation from './Navigation'
import {HeroSection, AboutSection, WorkSection} from '../sections'
import { lightTheme, darkTheme } from "./Themes"


const LayOutContainer = styled.div`
    width: 100vw;
    background: ${props => props.workrefVisible ? darkTheme.body: lightTheme.body};
    color: ${props => props.workrefVisible ? darkTheme.text: lightTheme.text};
    transition: background 2s ease, color 1s ease;
`

const Layout = () => {
    const {ref: workref, inView: workrefVisible} = useInView({
        triggerOnce: false,
    });

  return (
    <ThemeProvider theme={lightTheme}>
        <LayOutContainer workrefVisible={workrefVisible}>
            <Navigation/>
            <HeroSection />
            <AboutSection/>
            <WorkSection ref={workref}/>
        </LayOutContainer>
    </ThemeProvider>
  )
}

export default Layout