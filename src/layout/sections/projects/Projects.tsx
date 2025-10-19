import styled from "styled-components";
import {TabMenu,TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexContainer} from "../../slider/FlexContainer.tsx";
import {Project} from "./project/Project";
import Proj1 from"../../../assets/img/Rectangle 4.png";
import Proj2 from"../../../assets/img/Rectangle 13 (1).png";
import Proj3 from'../../../assets/img/Rectangle 8 (1).png';
import Proj4 from'../../../assets/img/Rectangle 12.png';
import Proj5 from"../../../assets/img/Rectangle 6 (1).png";
import Proj6 from"../../../assets/img/Rectangle 14.png";
// import { Proj1,Proj2,Proj3,Proj4,Proj5,Proj6} from '../../../assets/img/';
import {SectionTitle} from "../../slider/SectionTitle.tsx";
import {Container} from "../../../styles/Container.tsx";
import { useState} from "react";



const tabsItems:Array<{status: TabsStatusType, title: string}>=[
    {
        title:"ALL",
        status:'ALL',
    },
    {
        title:"LANDING PAGE",
        status:'LANDING PAGE',
    },
    {
        title:"REACT",
        status:'REACT',
    },
    {
        title:"ALL",
        status:'ALL',
    },
    {
        title:"SPA",
        status:'SPA',
    },
]

const projectsData = [
    {
        title: "Project Tile goes here",
        src: Proj1,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack : HTML , JavaScript, SASS, React",
        iconId: "akar",
        iconGit: "github",
        type: "SPA",
    },
    {
        title: "Project Tile goes here",
        src: Proj2,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack : HTML , JavaScript, SASS, React",
        iconId: "akar",
        iconGit: "github",
        type: "REACT",
    },
    {
        title: "Project Tile goes here",
        src: Proj3,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack : HTML , JavaScript, SASS, React",
        iconId: "akar",
        iconGit: "github",
        type: "LANDING PAGE",
    },
    {
        title: "Project Tile goes here",
        src: Proj4,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack : HTML , JavaScript, SASS, React",
        iconId: "akar",
        iconGit: "github",
        type: "REACT",
    },
    {
        title: "Project Tile goes here",
        src: Proj5,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack : HTML , JavaScript, SASS, React",
        iconId: "akar",
        iconGit: "github",
        type: "LANDING PAGE",
    },
    {
        title: "Project Tile goes here",
        src: Proj6,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        stack: "Tech stack : HTML , JavaScript, SASS, React",
        iconId: "akar",
        iconGit: "github",
        type: "SPA",
    },
];

export  const Projects = () => {
    const [currentFilterStatus, setCurrentFilterStatus]= useState('ALL')
    let filteredProjects = projectsData

    if (currentFilterStatus === 'LANDING PAGE') {
        filteredProjects = projectsData.filter(project => project.type ==='LANDING PAGE');
    }

    if (currentFilterStatus === 'REACT') {
        filteredProjects = projectsData.filter(project => project.type ==='REACT');
    }

    if (currentFilterStatus === 'SPA') {
        filteredProjects = projectsData.filter(project => project.type ==='SPA');
    }


    function changeFilterStatus(value:TabsStatusType) {
        setCurrentFilterStatus(value);
    }


    return (
        <SectionProject id="project">
            <StyledProjects >
                <Container>
                    <SectionTitle> Projects </SectionTitle>
                    {/*<SubTitle> Things I’ve built so far</SubTitle>*/}
                    <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}/>
                    <FlexContainer wrap="wrap" align="center" justify="space-between" gap="64px 0">
                        {filteredProjects.map(( p) => {
                            return <Project
                                title={p.title}
                                src={p.src}
                                text={p.text}
                                stack={p.stack}
                                iconId={p.iconId}
                                iconGit={p.iconGit}
                                // type={p.type}
                            />
                        })}
                    </FlexContainer>
                </Container>
            </StyledProjects>
        </SectionProject>
    );
};

const SectionProject = styled.section``

const StyledProjects = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
`






