import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {theme} from "../../../../styles/Theme.styled.tsx";


type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    stack: string,
    iconId: string,
    iconGit: string,
}


export const Project = (props:ProjectPropsType) => {

    return (
        <StyledProject >
            <Content >
                    <Image src={props.src } alt='logo' />
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Stack>{props.stack}</Stack>

                      <LinkWrapper >
                          <LinkItem>
                              <Icon iconId={props.iconId} width={"20px"}  height={"20px"} viewBox={ '0 0 20 20'}/>
                              <Link href={'#'}>Live Preview</Link>
                           </LinkItem>
                          <LinkItem >
                              <Icon iconId={props.iconGit} width={"20px"}  height={ "20px"} viewBox={ '0 0 20 20'}/>
                              <Link href={'#'}>View Code</Link>
                          </LinkItem>
                       </LinkWrapper>
            </Content>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    min-width: 375px;
    //flex-grow: 1;
    //flex-direction: column;
    background-color: rgb(255, 255, 255);
    border: 0.5px solid rgba(97, 76, 133, 0.49);
    border-radius: 20px;
    gap: 64px 32px;
    
    @media ${theme.media.desktop} {
    
}
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    //max-width:375px;
    //max-height: 260px;
    object-fit:cover;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375px;
`
const Link = styled.a`
    font-size: 16px;
    color: #000;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;  
  gap: 48px;
  font-size: 16px;
  align-items: center;
  padding: 25px  30px;
    color: #000;
`

const LinkItem = styled.div`
  display: flex;              
  align-items: center;
  gap: 6px;                 
  font-size: 16px;
  text-decoration: none;
 
  &:hover {
    text-decoration: underline;
  }
`


const Title = styled.h3`
    margin: 0;
    color: #333;
    font-size: 28px;
    padding: 27px 17px;
`

const Text = styled.p`
    text-decoration: none;
    padding: 0 20px 0 20px;
    font-size: 18px;
 `

const Stack = styled.h4`
    font-family:  ' Poppins', sans-serif;
    color: ${theme.colors.grayDark};
    font-size: 16px;
    font-weight: 400;
`
