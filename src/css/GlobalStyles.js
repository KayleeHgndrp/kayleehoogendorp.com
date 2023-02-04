import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    // General reset -------------------------------------

    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strong, sub, sup, var,
    b, u, i, 
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    }
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    	display: block;
    }
    
    body {
    
        overflow-x: hidden;
        box-sizing: border-box;
        line-height: 1.2;
        letter-spacing: .02em;
    
        
    }
    
    ol, ul {
    	list-style: none;
    }
    
    blockquote, q {
    	quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
    	content: '';
    	content: none;
    }
    
    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }

    
    
    :root{
        // Colors
        --black: #222222;
        --accent: #37508b;
        --accent-rgb: 55, 80, 139;
        /*--accent: #f7504f;*/
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