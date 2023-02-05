/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.li`
    background: white;
    border-radius: var(--border-rad);
    margin-bottom: 1.5rem;
    list-style: none;
    color: var(--black);
`

const Title = styled.h4`
    font-size: calc(0.8rem + 0.5vw);
    font-weight: 800;
    text-transform: Capitalize;
    margin-bottom: 1em;
`

const HashTags= styled.div`
    border-top: 2px solid black;
    padding-top: 1em;
    display: flex;
    flex-wrap: wrap;
`

const Tag = styled.span`
    padding: 0.2rem 0.7rem;
    font-size: calc(0.6rem + 0.3vw);
`

const Icon = styled.div`
    margin-bottom: 1rem;
`
const GridContainer = styled.div`
    height: 50vh;
    min-height: 500px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    overflow: hidden;

    @media (max-width: 64em){
        /* mobile*/
        height: 70vh;
        min-height: 600px;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1rem;
      
        & > *:last-child {
          max-width: 100%;
        }
    }
`
const Info = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 64em){
        margin-bottom: 2rem;
    }
  
`
const Cover = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    &>*{
        background-size: cover;
        background-position: 50% 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0 var(--border-rad) var(--border-rad) 0;

        @media (max-width: 64em){
            border-radius: 0 0  var(--border-rad) var(--border-rad);
        }
    }
`
const Card = (props) => {
  const {id, name, description, tags, icon, video, image} = props.data;

  return (
    <MainContainer>
        <GridContainer>
            <Info>
                <div>
                    <Icon><img src={icon}></img></Icon>
                    <Title>{name}</Title>
                    <p>{description}</p>
                </div>
                <HashTags>            
                    {
                        tags.map((t, id )=>{
                            return <Tag key={id}>#{t}</Tag>
                        })
                    }
                </HashTags>
            </Info>
            <Cover>
                { video && <video autoPlay="autoplay" loop="loop" muted defaultmuted="true" playsInline data-wf-ignore="true" data-object-fit="cover"><source src={video} type="video/mp4"/></video>}
                <img src={image}></img>
            </Cover>
        </GridContainer>
    </MainContainer>
  )
}

export default Card