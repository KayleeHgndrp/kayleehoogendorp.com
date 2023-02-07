/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useRef } from "react"
import styled from 'styled-components'

const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 32px;
  height: 32px;
  background: rgba(var(--accent-rgb), 0.5);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  @media (max-width: 64em){
        display: none;
    }
`

const CustomCursor = () => {
    const cursor = useRef(null);

    const onMouseMove = event => {
      const { clientX, clientY } = event
      cursor.current.style.left = `${clientX}px`;
      cursor.current.style.top = `${clientY}px`;
    }
  
    useEffect(() => {
      document.addEventListener("mousemove", onMouseMove)
      return () => {
        document.removeEventListener("mousemove", onMouseMove)
      }
    }, [])
  return (
    <Cursor
        className=""
        ref = {cursor}
      />
  )
}

export default CustomCursor