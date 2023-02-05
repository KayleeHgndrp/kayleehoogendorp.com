/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from 'styled-components'

/* -------------------------- Internal Dependencies ------------------------- */
import {CardsContainer} from '../components'
import { AnimatedTitle } from '../components/Animations'

const Section =  styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  `

const Main = styled.div`
   width: 90%;
   max-width: 980px;
   overflow: hidden;
   &> * {
        margin-top: var(--gap);
    }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const WorkSection = React.forwardRef((props, ref) => {
  
  return (
    <Section>
        <Main ref={ref}>
            <FlexContainer>
                <h2><AnimatedTitle  text={"Here's What I do"}/></h2>
                <CardsContainer />
            </FlexContainer>
        </Main>
    </Section>
  )
})

export default WorkSection