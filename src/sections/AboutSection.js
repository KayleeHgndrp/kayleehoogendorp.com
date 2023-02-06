/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from 'styled-components'


/* -------------------------- Internal Dependencies ------------------------- */
import {Line} from '../components'
import { AnimatedTitle, AnimatedText } from '../components/Animations'

const Section =  styled.section`
  display: flex;
  justify-content: center;
`
const MainContainer = styled.div`
  width: 90%;
  max-width: 980px;
  margin-top: 1rem;

  &>  * +  * {
      margin-top: var(--gap);
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
 
  @media (max-width: 56em){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
  }
`
  
const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  .heading{
    font-size: clamp( 1.8375rem, 3.5vw, 3rem);
    font-weight: 400;
  }

  .sub-heading{
    margin-top: 1rem;
    font-weight: 400;
  }
`

const AboutSection = () => { 

  return (
    <Section id="about">
        <MainContainer >
        <Line ></Line>
            <ExperienceContainer >
                <h3 className='heading'><AnimatedText text={"4"}/></h3>
                <h3 className='heading'><AnimatedText  text={"2"}/></h3>
                <h3 className='heading'><AnimatedText text={"1"}/></h3>
                <h4 className='sub-heading'><AnimatedText  text={"Years into Programming"} /></h4>
                <h4 className='sub-heading'><AnimatedText text={"Years into Web Development"} /></h4>
                <h4 className='sub-heading'><AnimatedText text={"Year into Design"} /></h4>
            </ExperienceContainer>
            <Line></Line>
            <FlexContainer >
                <GridContainer >
                  <h2><AnimatedTitle  text={"About Me"}/></h2>
                  <p><AnimatedText text={"I'm a front-end developer based in the Netherlands. In the summer of 2018, I started programming. It took me a few years to discover front-end development, but when I did, I was immediately hooked! It satisfied my need for creativity. A whole new world of possibilities appeared before my eyes. I became really passionate and kept creating since then."}/></p>
                </GridContainer>
            </FlexContainer>
            <Line ></Line>
        </MainContainer>
    </Section>
  )
}

export default AboutSection