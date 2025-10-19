import styled, { css } from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";
import {useState} from "react";
// import {Link as StyledLink} from "react-scroll";
import * as React from "react";
import {Menu} from "../menu/Menu.tsx";
import { gradientText } from "../../../styles/Mixins.ts";
// const items = [
//     {
//         title: "Home",
//         href: "home",
//     },
//     {
//         title: "About",
//         href: "about",
//     },
//     {
//         title: "TechStack",
//         href: "techStack",
//     },
//     {
//         title: "Contacts",
//         href: "contacts",
//     },
//     {
//         title: "Project",
//         href: "project",
//     },]

export const MobileMenu: React.FC = () => {
    const [menuIsOpen,setMenuIsOpen]=useState(false);
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)};
    return (
        <StyledMobileMenu>
            <BurgerButton   isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)} }>
                {/*<ul>*/}
                    {/*{items.map((item, index)=> {*/}
                    {/*    return<ListItem key={index}>*/}
                            {/*<Link to={item.href} offset={50}>*/}
                            {/*    {item.title}*/}
                            {/*</Link>*/}
                            <Menu/>
                        {/*</ListItem>
                    })}*/}
                {/*</ul>*/}
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
    
    
        @media ${theme.media.tablet} {
       display: block;
    }`

 const MobileMenuPopup=styled.div<{isOpen:boolean}>`


     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 99999;
     background-color: rgba(113, 169, 250, 0.3);
     display: none;


     ${props => props.isOpen && css<{ isOpen: boolean }>`
         display: flex;
         justify-content: center;
         align-items: center;
     `}
     a {
         font-family: 'Poppins', sans-serif;
         font-weight: 400;
         font-size: 56px;
         min-width: 221px;
         min-height: 280px;
         color: Green;
         justify-content: center;
         align-items: center;
             // background-color: ${gradientText};

         &:hover {
             ${theme.colors.font};
         }
     }
 }
 `

const BurgerButton=styled.button<{isOpen: boolean}>`
    position: fixed;
    top:-100px;
   right: -50px;
    width: 200px;
    height: 200px;
    z-index: 999999;
    //display: none;

    span{
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
        
${props=>props.isOpen && css<{isOpen:boolean}>`
    background-color: rgba(255, 255, 255, 0);
`}


&::before{
content: '';
   display: block;
   width: 36px;
   height: 2px;
    background-color: ${theme.colors.font};
   position: absolute;
   transform: translateY(-10px);
    

    ${props=>props.isOpen && css<{isOpen:boolean}>`
    transform: rotate(-45deg) translateY(0);
   `}
  }
}  
    
&::after {
   content: '';
   display: block;
   width: 36px;
   height: 2px;
    background-color: ${theme.colors.font};
   position: absolute;
   transform: translateY(10px);
   bottom: 50px;
    left: 40px;

    ${props=>props.isOpen && css<{isOpen:boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
  `}
}
`