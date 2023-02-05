/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React , {useEffect} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

/* -------------------------- Internal SVG Dependencies ------------------------- */
import { Github } from '../components/AllSvgs'

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
  overflow: hidden;
  position: relative;
`
const Wrapper = styled.div`
  height: 100vh;
  width: 80vw;
  position: relative;
  top: 0;
  left:0;
  transform: rotate(25deg);
  display: flex;

  @media (max-width: 64em){
    left:-10rem;
    transform: translateX(0%) rotate(25deg);
  }

`
const Outer = styled.div`
  position: relative;
  z-index: 100;
  padding: 40px 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  pointer-events: none;
`

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  transform-origin: center top;
  pointer-events: auto;
`

const Lane = styled.div`
  img{
    border-radius: 18px;
  }
`

const GithubContainer = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  overflow: hidden;

  #github-link{
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  h4{
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    text-transform: uppercase;
  }
`

const GithubSection = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    gsap.set("#category-menu-wrapper-inner", { y: "0" , opacity: 1});
    gsap.set("#category-menu-middle-inner", { y: "-30%", opacity: 1});
    gsap.set("#category-menu-last-inner", { y: "0" , opacity: 1});
    gsap.set("#github-container", {opacity: 0});
    gsap.set("#github-link", { y: "100px" , opacity: 0});
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#category-menu-outer",
        start: "top top",
        end: "+=1000",
        scrub: true,
      }
    });
    
    tl.to("#category-menu-wrapper-inner",{duration: 4, y: "-30%", opacity: 0, ease: "power1.out"}, "key1")
      .to("#category-menu-middle-inner",{duration: 4, y: "0", opacity: 0, ease: "power1.out"}, "key1")
      .to("#category-menu-last-inner",{duration: 4, y: "-30%", opacity: 0, ease: "power1.out"},"key1" )
      .to("#github-container",{duration: 3,  opacity: 1, ease: "power1.out"},"key1" )
      .to("#github-link",{duration: 3,  opacity: 1, y: "0", ease: "power1.out"},"key1" )
     
      return () => {
        if(tl) tl.kill()
      }
    
  }, [])
  
  return (
      <Section id="work">
        <Wrapper class="outer" id="category-menu-outer">
          <Inner class="inner" >
            <Lane class="lane" id="category-menu-last">
                <div class="lane-inner" id="category-menu-last-inner">
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                </div>
              </Lane>
              <Lane class="lane" id="category-menu-last">
                <div class="lane-inner" id="category-menu-last-inner">
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                </div>
              </Lane>
              <Lane class="lane" id="category-menu-last">
                <div class="lane-inner" id="category-menu-last-inner">
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                  <div class="image">
                    <img src="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp" loading="lazy" sizes="(max-width: 779px) 100vw, (max-width: 807px) 70vw, (max-width: 1091px) , 45vw" srcset="https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno-p-500.webp 500w, https://assets.website-files.com/6017e817edf32734686c1b92/638bcfccd61e0b460f5f7a26_martin%20briceno.webp 1131w" alt="Homepage of Martin Briceno" class="column-item-img" />
                  </div>
                </div>
              </Lane>
          </Inner>
        </Wrapper>
        <GithubContainer id="github-container">
          <a id="github-link"  href="https://github.com/KayleeHgndrp" target="_blank" aria-label="Go to my github" title="Github"> 
            <Github fill={"white"} height={25} width={25}/>
            <h4>Check out my github</h4>            
          </a>
        </GithubContainer>
      </Section>




  )


}

export default GithubSection