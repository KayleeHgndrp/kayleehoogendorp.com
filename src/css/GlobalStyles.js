/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box; 
    }

    html{
        scroll-behavior: smooth;
        -ms-text-size-adjust:100%;
        -webkit-text-size-adjust:100%
    }

    body {
        font-family: "Neue Montreal Book";
        overflow-x: hidden;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
        text-rendering: geometricPrecision;
        color: var(--black)
    }

    h1, h2 {
        font-family: "Porlane", sans-serif;
     
    }

    h3, h4, h5, h6{
        font-family: "Neue Montreal Medium";
    }
    p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th{
        font-family: "Neue Montreal Book";
    }

    h1{
        font-size: clamp(12px, 35vw, 25rem); 
        text-transform: uppercase;
    }

    h2{
        font-size: clamp(2.125rem, 4vw, 4rem);
        text-transform: uppercase;
    }
    h3{
        font-size: clamp(0.8rem, 1vw, 1.125rem);
        text-transform: uppercase;
    }

    h4{
        font-size: calc(0.8rem + 0.5vw);
        font-weight: 800;
    }

    p{
      font-size: clamp(1rem, 2vw, 1.375rem); 
    }

    a{
      cursor: pointer;
    }

    :root{
        // Colors
        --black: #222222;
        --accent: #37508b;
        --accent-rgb: 55, 80, 139;
        --grey: #B3BAC1;
        --blue: #b3b9cb;
        --purple: #cfd2f5;
        --yellow: #f1d9ba;
        --green: #cdd1c5;
        --gap: 5rem;
        --border-rad: 20px;
    }
    
    `

export default GlobalStyle;