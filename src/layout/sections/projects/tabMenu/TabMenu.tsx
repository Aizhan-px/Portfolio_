import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled.tsx";

export type TabsStatusType = 'ALL'|'LANDING PAGE'|'REACT'|'SPA'

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus:(value:TabsStatusType) => void
}

export const TabMenu = (props: TabMenuPropsType) => {
   console.log(props);
    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map((item, index)=> {
                    return <ListItem key={index}>
                        <Link as={'button'} onClick={() => {
                            props.changeFilterStatus(item.status)
                        }}> {item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 22px;
    gap:30px;
    padding: 20px;
    
    &:hover {
        cursor: pointer;
        color: blue;
    }
    
}`

const ListItem = styled.li`
    color: ${theme.colors.grayLight};
`
const Link = styled.a`
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    color: ${theme.colors.grayLight};


    &:hover {
        cursor: pointer;
        color: #d433ed;
    }`
