
import { Icon } from "../../../components/icon/Icon.tsx";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string
    height?:string
    width?:string
}


export const Main = (props:SkillPropsType) => {
    return (
        <StyledMain>
            <Icon iconId={'abstract'} width={props.width || "770px"}  height={props.height || "770px"} />
            </StyledMain>
    );
};


const StyledMain=styled.div`
    //display: flex;
`