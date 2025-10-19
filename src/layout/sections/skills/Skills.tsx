import styled from "styled-components";
import {FlexContainer} from "../../slider/FlexContainer.tsx";
import {Skill} from "./Skill.tsx";
import {SectionTitle} from "../../slider/SectionTitle.tsx";
import {Container} from "../../../styles/Container.tsx";



export const Skills = () => {
    return (
        <SectionMain id="techStack">
            <StyleSkills >
                <Container>
                    <SectionTitle>My Tech Stack</SectionTitle>
                    <SubTitle>My go-to stack for crafting web projects</SubTitle>
                    <FlexContainer  align={"center"} justify={"space-around"}    wrap={'wrap'} style={{ gap: "80px", justifyContent: "center", padding: '20px', }}>
                        <Skill iconId={'html'}/>
                        <Skill iconId={'css'}/>
                        <Skill iconId={'js'}/>
                        <Skill iconId={'react2'}/>
                        <Skill iconId={'redux'}/>
                        <Skill iconId={'bootstrap'}/>
                        <Skill iconId={'tailwind'}/>
                        <Skill iconId={'sass'} />
                        <Skill iconId={'gitI'} />
                        <Skill iconId={'superhero'} />
                        <Skill iconId={'vscode'}/>
                        <Skill iconId={'github'} />
                    </FlexContainer>
                </Container>
            </StyleSkills>
        </SectionMain>

    );
};

const SectionMain = styled.section``
const StyleSkills = styled.div`
    //min-height: 100vh;
    text-align: center;
    padding: 50px 20px;
    position: relative;
`

const SubTitle = styled.h3`

`