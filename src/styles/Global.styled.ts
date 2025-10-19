import { createGlobalStyle } from 'styled-components';
import {theme} from "./Theme.styled.tsx";


export const GlobalStyled= createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        //background-color: rgba(47, 236, 148, 0.56);
        background-color: rgba(205, 203, 203, 0.23);
        margin: 0;
        font-family: 'Poppins', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        --accent-gradient-text: linear-gradient(90deg, #E70FAA, #13B0F5);
        color: ${theme.colors.grayLight};
        
        min-width: 375px;
    }

    a {
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 1px;
    }

    ul {
        list-style: none;
    }

    h1 {
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 58px;
        letter-spacing: -1px;
    }

    h2 {
        color: ${theme.colors.font};
        font-family: Poppins, sans-serif;
        font-weight: 700;
        font-size: 48px;
        letter-spacing: -0.4px;
    }

    h3 {
        color: ${theme.colors.grayLight};
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0px;
    }

    h4 {
        color: ${theme.colors.grayLight};
        font-size: 16px;
        font-weight: 400;


    }


    p {
        color: ${theme.colors.grayLight};
        font-family: Poppins, sans-serif;
        font-weight: 300;
        font-size: 18px;
        letter-spacing: 0px;
        text-align: center;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    section {
        padding: 200px 0 ;
        @media ${theme.media.mobile} {
            padding: 150px 0;
        }
    }

    span {
        color: #A7A7A7;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 1px;

    }

    //
    //@media: {
    //          table:"screen and{max-width:778px} and {min-width:778px} and (max-width: 577px)",
    //          mobile:"screen and(max-width: 577px)",
    //      }

`


