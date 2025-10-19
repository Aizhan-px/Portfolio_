import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {Container} from "../../styles/Container.tsx";
import {FlexContainer} from "../slider/FlexContainer.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {Logo} from "../../components/logo/Logo.tsx";



export const Header=()=> {
    return (
        // <SectionHeader id={"header"}>
        <StyledHeader>
            <Container>
              <FlexContainer justify="space-between" align={'center'}>
                  <Logo/>
                  <HeaderMenu />
                  <MobileMenu/>

                  <SocialList>
                      <SocialLink>
                          <Icon height={'30px'} width={'30px'} iconId={'git'} />
                          <Icon height={'30px'} width={'30px'}  iconId={'linkedin'} />
                          <Icon height={'30px'}  width={'30px'} iconId={'telegram'} />
                      </SocialLink>
                  </SocialList>
              </FlexContainer>
            </Container>
       </StyledHeader>
        // </SectionHeader>
    );
};

// const SectionHeader = styled.section``
const StyledHeader = styled.header`
    display: flex;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0px;
    //----for fix header if you want
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgb(243, 245, 246);
    //opacity: 20%;
    z-index: 99999;
    color: #32065e;
    //fiksatsia super idea mojno ybrat' nijnee menu <---------
`


const SocialList = styled.div`
    margin-left: 15px;
    display: flex;
    justify-content: center;
    color:#42446E;

    @media (max-width: 375px) {
        display: none;
    }
`

const SocialLink = styled.a``

