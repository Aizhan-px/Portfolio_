import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";
import {Menu} from "../menu/Menu.tsx";


export const HeaderMenu: React.FC = () => {
    return (
        <StyledHeaderMenu>
            <Menu/>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        flex-direction: row;
        display: flex;
        justify-content: center;
        font-size: 22px;
        gap: 30px;
        padding: 20px;
        
        &:hover {
            cursor: pointer;
            color: #d433ed;
        }

        @media ${theme.media.tablet} {
            display: none;
        }

    }`


