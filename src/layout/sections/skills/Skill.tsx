
import { Icon } from "../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    height?:string
    width?:string
}


export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width || "120px"}  height={props.height || "120px"}/>
        </StyledSkill>
    );
};


const StyledSkill=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   
`

