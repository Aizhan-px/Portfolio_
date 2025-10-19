import styled from "styled-components";
import {Button} from "../../../styles/Button.tsx";
import {Container} from "../../../styles/Container.tsx";
import {theme} from "../../../styles/Theme.styled.tsx";

 export const  Contacts = () => {
     return (
         <StyledContacts id="contacts">
             <Container>
             <SectionTitle>
                Contacts
             </SectionTitle>
             <StyledForm>
                 <Field name="name" placeholder="Name" autoComplete="name" />
                 <Field name="subject" placeholder="Subject" autoComplete="subject" />
                 <Field name="message" as="textarea" placeholder="Message" autoComplete="off" />
                 <Button type="submit">Send message</Button>
             </StyledForm>

             </Container>
         </StyledContacts>
     )
 }

 const StyledContacts = styled.section`
     max-width: 640px;
     width: 100%;
     margin: 0 auto;
     padding: 40px;
 `
const SectionTitle = styled.h2`
    font-size: 48px;
    display: flex;
    justify-content: center;
    padding: 30px 0 30px 0;

    

    
    //span{
    //   font-family:  "DM Sans", sans-serif;
    //   font-weight: 700;
    //    font-size: 22px;
    //    color: hotpink;
    //}
`

const StyledForm = styled.form`
   //max-width: 540px;
   //width: 100%;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   gap: 16px;
   
   textarea {
    resize: none;
    height: 155px;
}
`


const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.font};
    border-radius: 5px;
    padding: 7px 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};

    &::placeholder {
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.font};
    }`

