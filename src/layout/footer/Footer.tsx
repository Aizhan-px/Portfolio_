import styled from "styled-components";
import {FlexContainer} from "../slider/FlexContainer.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../styles/Container.tsx";
import {HeaderMenu} from "./../header/headerMenu/HeaderMenu.tsx";
import {theme} from "../../styles/Theme.styled.tsx";





export const Footer = () => {
    return (
        <StyledFooter >
        <Container>
            <FlexContainer direction={'column'}  wrap={'wrap'}>

                <Top>
                    <Logo>{`{007}`}</Logo>
                    <ContactInfo >
                        <a href="tel:+391234509876">+39 123 450 9876</a>
                        <a href="mailto:aizhan.mysakanova.ch@gmail.com?subject=Hello&body=Hi%20Aizhan Mysakanova,">
                            aizhan.mysakanova.ch@gmail.com
                        </a>
                    </ContactInfo>
                    <SocialList>
                        <SocialLink>
                            <Icon height={'30px'} width={'30px'} iconId={'git'} />
                            <Icon height={'30px'} width={'30px'} iconId={'linkedin'} />
                            <Icon height={'30px'}  width={'30px'} iconId={'telegram'} />
                        </SocialLink>
                </SocialList>
                </Top>


                <Bottom>
                    <HeaderMenu />
                    <Credits>
                        Designed and built by <a href="#">Aizhan</a> with{" "}
                        <a href="#">Love</a> & <a href="#">Coffee</a>
                    </Credits>
                </Bottom>
            </FlexContainer>
       </Container>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    padding: 70px 20px;
    font-size: 14px;
    color: #333;
    position: relative;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #c7c7c8;
    padding: 45px 0 ;
    
`

const Logo = styled.div`
    font-weight: bold;
    font-size: 20px;
    //justify-content: start;
    justify-content: space-around;
    
`

const ContactInfo = styled.div`
    display: flex;
    //justify-content: space-between;
    gap: 20px;
    margin-left: 15px;
    //padding-left: 470px;
     a {
         color: ${theme.colors.accent};
         font-family: 'DM Sans', sans-serif;
         font-size: 18px;
         //flex-direction: column;
         
     }
`


const SocialList = styled.div`
    display: flex;
    margin-left: 15px;
    align-items: center;
    
    @media (max-width: 375px) {
        display: none;
    }
`

const SocialLink = styled.a`
    display: flex;
    cursor: pointer;
    color: #42446E;
    transition: 0.3s;

    &:hover {
        color: #614c85;
    }

    @media (max-width: 375px) {
        display: none;
    }
`



const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 45px 0 ;
`


const Credits = styled.div`
    color: #666;
   
    a {
        color:#42446E;
        text-decoration: none;
        font-weight: 500;
    }
`
// davai skroem Tabmenu v mobile i ostavim social contact i mail
