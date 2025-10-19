// import drawing from "../../../assets/img/drawing.svg";
import styled from "styled-components";
import { Container } from "../../../styles/Container.tsx";
import { Job } from "./Job.tsx";

// const SectionMain=styled.section``
const StyledAboutContainer = styled(Container)`
  padding: 60px 0;
    width: 100%;
    position: relative;
`

// Сетка: слева текст, справа картинка
const Grid = styled.div`
  display: grid;
  //grid-template-columns: 60% 40%;
  align-items: center;
  gap: 92px;
    justify-items: center;
    position: relative;
    

    
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
const AboutConteant = styled.div`
    max-width: 710px;
    grid-template-columns: 3fr ;
    display: grid;
`
const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
    gap: 143px;
`


const Text = styled.h3`
    max-width: 708px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0px;
    margin-bottom: 10px;
    gap: 38px;
`

// const ImageWrapper = styled.div`
//     //max-width: 834px;
//   position: relative;
//   display: flex;
//   justify-content: center;
//     gap:92px;
//    left: 177px;
//     //opacity: 0.5;
//   img {
//
//   }
// `

const jobs = [
    {
        title: "Junior Web Developer",
        company: "Dr. Rajkumar's Learning App",
        location: "Italy",
        type: "full time",
        date: "Sep 2021 – Dec 2021",
    },
    {
        title: "Web Development Intern",
        company: "Ion Pixelz Web Solutions",
        location: "Bishkek",
        type: "internship",
        date: "Sep 2021 – Dec 2021",
    },
    {
        title: "SEO / SEM Specialist",
        company: "HAAPS",
        location: "Italy",
        type: "internship",
        date: "Sep 2021 – Dec 2021",
    },
];


const Education = [
        { title:"Diploma in Graphic Design (Print Media)",
        company:"Technical College Kyrgyz State University named after I.Arabaev",
        location: "Bishkek", type:"full time", date:"Aug 2007 – Dec 2011" }
];

export const About = () => {
    return (
        <StyledAboutContainer id="about">
            <Grid>
                {/* Левая колонка */}
                <AboutConteant>
                    <Title>About Me</Title>
                    <Text>
                        The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                    </Text>


                    <Title>Work Experience</Title>
                               {jobs.map((job, index) => (
                        <Job key={index} {...job} type={"full time"}  />
                    ))}

                        <Title>Education</Title>
                      {Education.map((edu, index) => (
                           <Job key={index} {...edu} type={"full time"} />
                        ))}
                </AboutConteant>

                {/* Правая колонка */}
                {/*<ImageWrapper>*/}
                {/*    <img src={drawing} alt="Illustration" />*/}
                {/*</ImageWrapper>*/}
            </Grid>
        </StyledAboutContainer>
    );
};
