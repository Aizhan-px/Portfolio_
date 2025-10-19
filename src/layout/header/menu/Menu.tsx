import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";
import {Link as StyledLink} from "react-scroll";
import * as React from "react";

const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About",
        href: "about",
    },
    {
        title: "TechStack",
        href: "techStack",
    },
    {
        title: "Contacts",
        href: "contacts",
    },
    {
        title: "Project",
        href: "project",
    },]




export const Menu: React.FC = () => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index)=> {

                    return <ListItem key={index}>
                               <StyledLink to={item.href} offset={50}>
                                   {item.title}
                               </StyledLink>
                         </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        //display: flex;
        justify-content: center;
        font-size: 22px;
        gap: 30px;
        padding: 20px;
       
        transition: .2s ease-in-out;

        &:hover {
            cursor: pointer;
            color: #d433ed;
        }

    }`

const ListItem = styled.li`
    color: ${theme.colors.grayLight};
`
