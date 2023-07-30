import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'Inter',sans-serif;
        width: 100vw;
        height: 100vh;
    }

    #root{
        width: 100%;
        height: 100%;
    }

    :root{
        --brand1: #312782;
        --brand2:#5E4AF7;
        --grey0:#F5F5F5;
        --grey100:#E0E0E0;
        --grey300:#828282;
        --grey600:#333333;
        --feedback-negative: #E60000;
        --feedback-positive:#168821;
        --feedback-warning:#FFCD07;
        --feedback-information: #7B61FF;
    }  

    button{
        cursor: pointer;
        border-radius: .2rem;
        padding: .2rem;
    }

`;
