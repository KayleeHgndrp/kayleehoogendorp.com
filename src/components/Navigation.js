/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, {useEffect, useState } from 'react'
import styled from "styled-components"
import gsap from 'gsap';

/* -------------------------- Internal Dependencies ------------------------- */
import ButtonLink from './ButtonLink';
import {
  staggerText,
  RevealContainer, 
  staggerRevealLine,
  RemoveLine,
  staggerRemoveText, 
  SlideIn,
  SlideOut

} from "../components/Animations";

/* -------------------------- Data Dependency ------------------------- */
import { navData } from '../data/NavData';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;

  h3, h4{
    color: white;
    text-transform: uppercase;
  }
`

const Header = styled.div`
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 2.5rem;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      opacity: ${props => props.headerIsVisible? "1" : "0"};
      transition: opacity 0.5s ease; 
      z-index: 999;
`

export const Nav = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  background: ${props => props.workrefVisible | props.footerrefVisible ? props.theme.accent : props.theme.body};
  color: #fff;
`
const HamburgerMenu =  styled.span`
    height: 3rem;
    width: clamp(3.5rem, 4vw, 4rem);
    position: relative;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    
    &::after, &::before{
        content: '';
        display: flex;
        height: 2px;
        right: 0;
        background-color: white;
        position: absolute;
        transition: all 0.5s ease;
        width: 100%;
    }

    &::after{
        bottom: 1rem;
        transform: ${props => props.isOpen ? 'translateY(5px)' :  'translateY(0)'};
     
    }
    &::before{
        top: 1rem;
        transform: ${props => props.isOpen ? 'translateX(-150%)' :  'translateX(0)'};
    }
`
const HamburgerText = styled.h4`
    position: absolute;
    bottom: 1.2rem;
    transform: ${props => props.isOpen ? 'translateX(0%)' :  'translateX(150%)'};
    transition: transform 0.5s ease;
`

export const NavItems = styled.div`
  height: 75%;
  width: 90%;
  display: flex;
  align-items: space-between;
  justify-content: center;
  background-color: hsla(0,0%,100%,.05);
  border-radius: var(--border-rad);
  
  ul {
    padding: 0;
    width: 90%;
    
    li {
      width: 100%;
      list-style: none;
      overflow: hidden;
    }

    &>*:first-child{
      margin-top: 4rem;
    }
  }
`
const ButtonContainer = styled.div`
  width: 90%;
  position: absolute;
  bottom: 3rem;
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`
const Line = styled.div`
    height: 2px;
    background: #fff;
    width: 100%;
    margin-bottom: 4rem;
`

const Navigation = (props) => {
  
    const [menuState, setMenuState] = useState({
      initial: false,
      clicked: null,
    });

    // Toggle menu
    const handleMenu = () => {

    if (menuState.initial === false) {
      setMenuState({
         initial: null,
         clicked: true,
       });
       
     } else if (menuState.clicked === true) {
      setMenuState({
         clicked: !menuState.clicked
       });

     } else if (menuState.clicked === false) {
      setMenuState({
         clicked: !menuState.clicked,
       });
     }

   };

  // Menu animations
  useEffect(() => {
  
    if (menuState.clicked === false) {
      // close menu with animations
      staggerRemoveText(".nav-title", 0)
      RemoveLine(".line", 0.5)
      SlideOut('.navigation', 0.8)
    
    } else if (
      menuState.clicked === true ||
      (menuState.clicked === true && menuState.initial === null)
    ) {

      // The navigation is on display: none when the user opens the browser.
      // Display is turned into flex when the user clicks for the first time.
      gsap.to('.navigation', { duration: 0, css: { display: "flex" } });

      SlideIn('.navigation', 0)
      RevealContainer('.nav-items', 0.5)
      staggerText(".nav-title", 1)
      staggerRevealLine('.line', 1.5)
    }
  }, [menuState]);

  const scrollTo = (id, e) => {
    e.preventDefault();
    const menuLinkElement = document.getElementById(id);
    menuLinkElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const handleMenuLinkClick = (id, e) => {

    staggerRemoveText(".link", 0)
    RemoveLine(".line", 0.5)
    SlideOut('.navigation', 0.8)

    setMenuState({
      clicked: !menuState.clicked,
    });

    setTimeout(() => {
      scrollTo(id, e);
    }, 1500);
  
  };

  // Header visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [headerIsVisible, setHeaderIsVisible] = useState(true)

  const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if( prevScrollPos > currentScrollPos ){
        setHeaderIsVisible(true)
      }
      else if(currentScrollPos === 0){
        setHeaderIsVisible(true)
      }
      else{
        setHeaderIsVisible(false)
      }

      setPrevScrollPos(currentScrollPos)
  }

useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
})

  return (
      <Wrapper>
        <Header headerIsVisible={headerIsVisible} >
            <h4 className='logo'>HOOGENDORP</h4>
            <HamburgerMenu onClick={handleMenu} isOpen={menuState.clicked}>
                <HamburgerText isOpen={menuState.clicked} >close</HamburgerText>
            </HamburgerMenu>
        </Header>
        <Nav className='navigation' isOpen={menuState.clicked} workrefVisible={props.workrefVisible} footerrefVisible={props.footerrefVisible}>
            <NavItems className='nav-items'>
                <ul>
                  {navData.map(link => (
                    <li key={link.id}>
                      <a className="nav-link" aria-label={link.ariaLabel} title={link.title}>             
                        <Title className="nav-title" onClick={link.key ? (e) => handleMenuLinkClick(link.key , e): undefined}>
                          <h3>{link.title}</h3>
                          <h4>{`0${link.id}`}</h4>
                        </Title>
                        <Line className='line'></Line>
                      </a>
                    </li>
                  ))}
                  <ButtonContainer>
                    <ButtonLink  
                      col={"white"} bg={"black"} 
                      name={"Contact"} 
                      href="mailto:kphoogendorp@gmail.com?subject=Let's work together!"
                    />
                  </ButtonContainer>
                </ul>
            </NavItems>
        </Nav>
      </Wrapper>
  )
}

export default Navigation