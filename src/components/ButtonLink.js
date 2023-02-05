/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react'
import styled from 'styled-components'

/* -------------------------- Internal SVG Dependencies ------------------------- */
import { ArrowLink } from './AllSvgs'

const ButtonContainer = styled.a`  
    height: 40px;
    min-width: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;  
    border-radius: 12px;
    border: 2px solid black;
    padding: 0.5rem 0;
    text-decoration: none;
    background: ${props => props.bg};
    color: ${props => props.col};

    &:hover{
      background: transparent;
      color: black;
    }
  
`
const InnerContainer= styled.div`
    height: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const SvgContainer= styled.div`
   height: 20px;
   width: 20px;
   margin-left: 1rem;
   overflow: hidden;
   z-index: 1;
   padding: 0.35em;
   transition: transform 0.25s ease;

   ${ButtonContainer}:hover &{
      transform: rotate(90deg);
  }
  
`


const InnerTextButton = styled.span`
  transform: translateY(90%);
  transition: transform .3s cubic-bezier(.175,.885,.32,1.275);
  
  ${ButtonContainer}:hover &{
    transform: translateY(-100%);
  }
`

const ButtonLink = (props) => {
  const [click, setClick] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const scrollTo = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollTo(id, e);
  };


  return (
    <ButtonContainer 
        href={props.href ? props.href : undefined} onClick={props.element ? (e) => handleClick(props.element, e): undefined} 
        col={props.col} 
        bg={props.bg}
        onMouseOver={()=>setIsHovering(true)} 
        onMouseOut={()=>setIsHovering(false)}
        aria-label={props.name} 
        title="Button"
        >
      <InnerContainer >
        <InnerTextButton>{props.name}</InnerTextButton>
        <InnerTextButton>{props.name}</InnerTextButton>
      </InnerContainer>
      <SvgContainer>
       <ArrowLink height={12} width= {12} fill={isHovering? 'black' : 'white'}/>
      </SvgContainer>
    </ButtonContainer>
  )
}

export default ButtonLink