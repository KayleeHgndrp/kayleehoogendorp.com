/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect } from 'react'
import styled from 'styled-components'

/* -------------------------- Internal Dependencies ------------------------- */
import {Line, ButtonLink} from '../components'

/* -------------------------- Internal Image Dependencies ------------------------- */
import ProfilePic from '../assets/img/me.jpg'
import flower from '../assets/img/flower.png'

const Section =  styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
  `

const MainContainer = styled.div`
    width: 90%;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 6rem;
    overflow: hidden;
`

const Title = styled.div`  
    display: flex;
    justify-content: space-between;

    #dash{
        letter-spacing: -.05905em;
  
         &:after {
            content: "";
            display: inline-block;
            height: 0.4em;
            vertical-align: bottom;
            width: clamp(2rem, 26vw, 14rem);
            border-top: clamp(1rem, 3vw, 2rem) solid var(--black);
        }
    }
`

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;   
`

const FlowerContainer =  styled.div`
    width: clamp(5rem, 25vw, 18rem);
    position: absolute;
    right: 0;

    img{
       height: auto;
       width: 100%;

       &:hover{
         transform: rotate(180deg);
         transition: transform 2s ease;
       }
    }
`

const GridContainerIntro = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
 
    @media (max-width: 48em){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem;
      
        & > *:last-child {
          order: -1;     
        }
    }
`
const IntroContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    background: white;
    padding: 4em 4rem 2.5em 1.25em;
    border-radius: var(--border-rad);
    font-size: var(--fontsm);

    p{
      font-size: clamp(1.25rem, 1.5vw, 1.5rem); 
    }

    @media (max-width: 64em){
        padding: 1.5em 2rem 1.5em 1.25em;
    }
`

const ButtonContainer = styled.div`
  width: 16em;
`

const ProfilePicture = styled.div`
    border-radius: var(--border-rad);
    min-height: 70vh;
    background: url(${props => props.profilePic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: top;

    @media (max-width: 64em){
        background-position-y: 30%;
    }
`

const HeroSection = () => {

    // line between the title grows when the user scrolls down
    useEffect(() => {
        let leftTitlelement = document.getElementById("text-left")
        let dashElement = document.getElementById("dash")
        let rightTitleElement = document.getElementById("text-right")

        const translateText = () => {
           // normalize scroll position as percentage
          var scrolled = (window.scrollY / window.innerHeight + 1 ) ** 5;

          leftTitlelement.style.transform = `translateX(${-window.pageYOffset}px)`
          rightTitleElement.style.transform = `translateX(${window.pageYOffset}px)`
          dashElement.style.transform = `scaleX(${scrolled})`
        }
    
        window.addEventListener('scroll', translateText)
        return () => {
          window.removeEventListener('scroll', translateText)
        }
      }, [])
      
  return (
    <Section id="home">
        <MainContainer>
          <div>
            <Title id="top-title"><h1 id="text-left">Front</h1><h1 id="dash"></h1><h1 id="text-right">End</h1></Title>
              <FlexContainer>
                <Title id="bottom-title"><h1>Developer</h1></Title>
                <FlowerContainer className='flower-container'><img className='flower' src={flower} alt="Orange flower next to the title that spins when you hover or open/refresh the website"/></FlowerContainer>
              </FlexContainer>
            <Line />
          </div>
            <GridContainerIntro id="intro">
              <IntroContainer>
                <div>
                    <p>Hi, I'm Kaylee Hoogendorp.</p>
                    <br></br>
                    <p>
                        I’m a front-end developer specializing in building (and occasionally designing) interactive 
                        digital experiences. Currently, I’m focused on building accessible, human-centered products 
                        with an unique layout, interactions and great typography. 
                    </p>
                </div>
                <ButtonContainer><ButtonLink  col={"white"} bg={"black"} name={"Send me an email"} href="mailto:kphoogendorp@gmail.com?subject=Let's work together!"></ButtonLink></ButtonContainer>
              </IntroContainer>
              <ProfilePicture  profilePic={ProfilePic} alt="A photo of the person this website belongs to. In the picture. In the photo, a person with a blue-orange scarf stands in front of a blue door. The person looks into the camera."></ProfilePicture>
            </GridContainerIntro>
        </MainContainer>
    </Section>
  )
}

export default HeroSection