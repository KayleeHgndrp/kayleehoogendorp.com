/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState, useRef } from 'react'
import styled from 'styled-components'

/* -------------------------- Internal SVG Dependencies ------------------------- */
import { Email, Github, Linkedin } from '../components/AllSvgs'

const Section =  styled.section`
  min-height: 100vh;
  width: 100vw;
  background: ${props => props.theme.accent};
  color: ${props => props.theme.white};
`

const Main = styled.div`
   width: 90%;
   position: relative;
   margin: 0 auto;
`

const Center =  styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const FooterText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  h1{
    font-size: clamp(9rem, 20vw, 15rem); 
  }

`

const MailContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`
const MailTo = styled.p`
    color: white;
    cursor: pointer;
    font-size: 14px;

    ${MailContainer}:hover &{
      color: var(--yellow);
    }
`
const MailContainerText= styled.p`
  padding: 0.5em 1em;
  border: 1px solid var(--black);
  border-radius: var(--border-rad);
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.25s ease , opacity 1s ease;
  font-size: 14px;

  ${MailContainer}:hover &{
    transform: translateY(-15%);
    opacity: 1;
  }
`
const LinkContainer = styled.div`
    width: clamp(8rem, 10vw,10rem);
    height: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 1rem;
    right: 0;
`

const FooterSection = React.forwardRef((props, ref) =>  {
  const [click, setClick] = useState(false);
  const mailRef = useRef();

  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.innerHTML)
    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 1000);
  };

  return (
    <Section ref={ref}>
      <Main>
        <Center>
          <FooterText>
            <h1>Thanks for</h1>
            <h1>visiting</h1>
          </FooterText>
          <MailContainer onClick={(e)=>{handleClick(e)}}>
            <MailTo ref={mailRef}>kphoogendorp@gmail.com</MailTo>
            <div>
              {click ? <MailContainerText class="mail-container-text">COPIED</MailContainerText> : <MailContainerText class="mail-container-text">CLICK TO COPY</MailContainerText>}
            </div>
          </MailContainer>
        </Center>
        <LinkContainer>
            <a class="github-link" href="https://github.com/KayleeHgndrp" aria-label="Go to my Github page" title="Github" target="_blank" ><Github fill={"white"} height={25} width={25}/></a>
            <a class="linkedin-link" href="https://www.linkedin.com/in/kaylee-hoogendorp/" aria-label="Go to my Linkedin page" title="Linkedin" target="_blank"><Linkedin fill={"white"} height={32} width={32} /></a>
            <a class="email-link" href="mailto:kphoogendorp@gmail.com?subject=Let's work together!" aria-label="Send me an email" title="Email"><Email fill={"white"} height={25} width={25} /></a>
        </LinkContainer>
      </Main>
    </Section>
  )
})

export default FooterSection