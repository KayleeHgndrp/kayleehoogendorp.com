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

/* -------------------------- Internal Images ------------------------- */
import Flower from '../assets/img/flower.png'

const LayOutContainer = styled.div`
    width: 100vw;
    background: ${props => props.workrefVisible ? darkTheme.body: lightTheme.body};
    color: ${props => props.workrefVisible ? darkTheme.text: lightTheme.text};
    transition: background 2s ease, color 1s ease;
`
const Intro = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: ${props => darkTheme.body};
    color: ${props => darkTheme.text};
    z-index: 9999;

    #first-name, #last-name{
        margin-right: calc(0.25rem + 0.1vw);
    }

    #flower-intro{
        width: calc(1.5rem + 1vw);
        margin-bottom: 0.45rem;
    }
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
            // intro page
          .fromTo("#first-name", { scale: 0},  { duration: 0.8, scale:1, ease: "power3.inOut",} , 'intro')
          .fromTo("#last-name", { scale: 0},  { duration: 0.8, scale:1, delay: 0.5, ease: "power3.inOut",} , 'intro')
          .fromTo("#flower-intro", { scale: 0},  { duration: 0.8, scale:1, delay: 1, ease: "power3.inOut",} , 'intro')
          .fromTo("#flower-intro", { rotation: 0},  { duration: 0.8, rotation:360 ,delay: 1.5, ease: "power3.inOut",} , 'intro')
          .fromTo("#first-name", { opacity: 1},  { duration: 0.8, opacity: 0, delay: 0.5, ease: "power3.inOut",} , 'intro-2')
          .fromTo("#last-name", { opacity: 1},  { duration: 0.8, opacity: 0, delay: 0.5, ease: "power3.inOut",} , 'intro-2')
          .fromTo("#flower-intro", { opacity: 1},  { duration: 0.8, opacity: 0, delay: 0.5, ease: "power3.inOut",} , 'intro-2')
          .fromTo('#page-intro', { yPercent: 0},  { duration: 0.8, yPercent:-100 , delay: 0.5, ease: "power3.inOut",})
           // homepage
          .fromTo("#top-title", { opacity: 0},  { duration: 0.8, opacity:1, ease: "power3.inOut",} , 'homepage')
          .fromTo("#bottom-title", { opacity: 0},  { duration: 0.8, opacity:1, ease: "power3.inOut",} , 'homepage')
          .fromTo("#flower-container",{scale: 0},  {duration: 1,scale: 1,ease: "power3.inOut"}, 'homepage')
          .fromTo("#line", {  opacity: 0, xPercent:-110},  { duration: 2, opacity:1, xPercent: 0, ease: "power3.inOut",}, 'homepage')
          .fromTo("#homepage-intro", { opacity:0},  { duration: 1, opacity:1, delay: 0.5, ease: "power3.inOut",} , 'homepage')
          .to("#flower-container" , {duration: 2,rotation:360, delay: 1, ease: "power3.inOut"}, 'homepage')
   
          return () => {
           if(tl) tl.kill()
         }
     }, [])

  return (
    <ThemeProvider theme={lightTheme}>
        <CustomCursor />
        <LayOutContainer workrefVisible={workrefVisible}>
            <Intro id="page-intro">
                <h2 id="first-name">Kaylee</h2>
                <h2 id="last-name">Hoogendorp</h2>
                <img id="flower-intro" src={Flower} alt="an orange flower" />
            </Intro>
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