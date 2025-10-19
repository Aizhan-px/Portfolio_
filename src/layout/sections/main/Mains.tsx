import styled from "styled-components";
import photo from "./../../../assets/img/main.photo.jpg"
import {FlexContainer} from "../../slider/FlexContainer.tsx";
import {Container} from "../../../styles/Container.tsx";
import {theme} from "../../../styles/Theme.styled.tsx";
// import abstract from'../../../assets/img/Abstract.svg'
// import {SectionTitle} from "../../slider/SectionTitle.tsx";
import {fonts} from "../../../styles/Common.ts";
import Tilt from 'react-parallax-tilt';


export const Mains = () => {
    return (
 <SectionMain id="home" >
    <StyledMain >
            <Container>
            <FlexContainer align={"center"} justify={"space-around"} wrap={'wrap'}>
                <Tilt>
                <MainText>
                       <SmollText> Hi 👋,</SmollText>
                        <MainText>My name is </MainText>
                        <Name> Aizhan Mysakanova </Name>
                        <MainTitle>Web Developer.</MainTitle>
               </MainText>
                    </Tilt>

                <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={40}
                    perspective={800}
                    transitionSpeed={1500}
                    scale={1.1}
                    gyroscope={true}
                >
                <PhotoWrapper>
                    {/*<img src={abstract} alt="Illustration" />*/}
                    <Photo src={photo} alt="myPhoto" />
                </PhotoWrapper>
                </Tilt>

           </FlexContainer>
           </Container>
        </StyledMain>
        </SectionMain>
    );
};

const SectionMain=styled.section``
const StyledMain = styled.div`
    min-height: 80vh;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 200px 0;
    
  `

const MainText = styled.h2`
    ${fonts({family:"'Poppins', sans-serif",weight:700,  Fmax:58, Fmin: 36,})}
    //font-size: 58px;
    letter-spacing: -1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Name = styled.h2`
    ${fonts({weight: 700, Fmax: 58, Fmin: 36,})}
    position: relative;
    //font-weight: 700 ;
    //font-size: 58px;
    z-index: 0;
    color: #d433ed;`



const SmollText = styled.h2`
    ${fonts({weight: 700, Fmax: 58, Fmin: 36,})}
`

const MainTitle = styled.h2`
    color:${theme.colors.font};
    //font-size: 58px;
    ${fonts({weight: 700, Fmax: 58, Fmin: 36,})}
`


const PhotoWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media ${theme.media.mobile} {
    width: 350px;
    height: 350px;
}
`

const Photo  = styled.img`
    position: absolute;
    z-index: 1;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    //padding-top: 30px; dlia mobilki
    
`






