/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, {useEffect } from 'react'
import styled , {ThemeProvider} from "styled-components"
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap';

/* -------------------------- Internal Dependencies ------------------------- */
import Navigation from './Navigation'
import {HeroSection, AboutSection, WorkSection, GithubSection, FooterSection} from '../sections'
import { lightTheme, darkTheme } from "./Themes"
import { CustomCursor } from '.';


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

    const {ref: footerref, inView: footerrefVisible} = useInView({
        triggerOnce: false,
      });
   
      useEffect(() => {
       const tl = gsap.timeline()
       tl
          .fromTo("#top-title", { opacity: 0},  { duration: 0.8, opacity:1, ease: "power3.inOut",} , 'key1')
          .fromTo("#bottom-title", { opacity: 0},  { duration: 0.8, opacity:1, ease: "power3.inOut",} , 'key1')
          .fromTo("#flower-container",{scale: 0},  {duration: 1,scale: 1,ease: "power3.inOut"}, 'key1')
          .fromTo("#line", {  opacity: 0, xPercent:-110},  { duration: 2, opacity:1, xPercent: 0, ease: "power3.inOut",}, 'key1')
          .fromTo("#intro", { opacity:0},  { duration: 1, opacity:1, delay: 0.5, ease: "power3.inOut",} , 'key1')
          .to("#flower-container" , {duration: 2,rotation:360, delay: 1, ease: "power3.inOut"}, 'key1')
   
          return () => {
           if(tl) tl.kill()
         }
     }, [])

  return (
    <ThemeProvider theme={lightTheme}>
        <CustomCursor />
        <LayOutContainer workrefVisible={workrefVisible}>
            <Navigation workrefVisible={workrefVisible} footerrefVisible={footerrefVisible}/>
            <HeroSection />
            <AboutSection/>
            <WorkSection ref={workref}/>
            <GithubSection />
            <FooterSection ref={footerref}/>
        </LayOutContainer>
    </ThemeProvider>
  )
}

export default Layout