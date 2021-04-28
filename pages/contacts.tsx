import { db } from '../firebase';
import { useRef } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

const StyledContacts = styled.article`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Content = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    margin:1em;
`
const Side = styled.section`
    background-color:var(--blue);
    display:flex;
    flex:1;
    flex-direction:column;
    padding:2em;
    border-radius:10px 0 0 10px;
    border:solid 3px var(--blue);
    & * {
        color:var(--active-font-color);
    }
    & h1 {
        font-size:3em;
    }
    @media (max-width:675px) {
        border-radius:10px 10px 0 0;
    }
`
const Form = styled.form`
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    padding:2em;
    color:var(--blue);
    border:solid 3px var(--blue);
    border-radius: 0 10px 10px 0;
    @media (max-width:675px) {
        border-radius:0 0 10px 10px;
    }
    & label {
        margin:0.5em 0;
    }
`
const Fieldset = styled.fieldset`
        margin:0.5em 0;
        border:none;
        display:flex;
        flex-direction:column;
`
const Input = styled.input`
    border:none;
    background:var(--theme-mid);
    border:solid 3px transparent;
    padding:0.5em;
    & :focus {
        border-bottom:solid 3px var(--blue);
    }
`
const Textarea = styled.textarea`
    border:none;
    background:var(--theme-mid);
    border:solid 3px transparent;
    padding:0.5em;
    & :focus {
        border-bottom:solid 3px var(--blue);
    }
`
const Submit = styled(Input)`
    border:solid 3px var(--blue);
    font-weight:bold;
    margin-top:1em;
    &:hover {
        color:black;
        background-color:var(--blue);
    }
`

const Icon = styled.div<{path :string,size?:string}>`
    width:${props => props.size ?? "2em"};
    height:${props => props.size ?? "2em"};
    margin-right:0.5em;
    background-color: var(--active-font-color);
    mask: url(${(props: any) => props.path}) no-repeat center / contain;
`
const Ul = styled.ul`
    margin-top:2em;
`
const Li = styled.li`
    display:flex;
    align-items:center;
    margin:1em 0;
    list-style-type:none;
`
const Social = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin-top:1em;
    align-items:flex-end;
    height:100%;
`
const Contacts = () => {
    const alert = useAlert();
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const message = useRef<HTMLTextAreaElement>(null)
    const clickSubmit = (event:any) => {
        event.preventDefault();
        if(name.current && email.current && message.current) {
            const payload = {name:name.current?.value,
                email:email.current?.value,
                message:message.current?.value
            };
            db.collection('mail').add(payload)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                alert.success('sikeresen elküldve');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                alert.error('Valami probléma történt. Próbálkozz újra később.');
            });;
        }
    }
    return (
        <>
        <StyledContacts>
        <Content>
        <Side>
        <header><h1>Kapcsolat</h1></header>
        <Ul>
            <Li><Icon path="/static/email.svg" size="1.5em"/> andraskauer@gmail.com</Li>
            <Li><Icon path="/static/phone.svg" size="1.5em"/>telefon: 06 20 409 5176</Li>
        </Ul>
        <Social>
            <a href="https://www.github.com/thekauer"><Icon path="/static/github.svg"/></a>
            <a href="https://www.linkedin.com/in/andr%C3%A1s-kauer-75967b208/"><Icon path="/static/linkedin.svg"/></a>
        </Social>
        </Side>
        <Form onSubmit={clickSubmit}>
            <Fieldset><label>Név</label><Input type="text" ref={name} required/></Fieldset>
            <Fieldset><label>Email</label><Input type="email" ref={email} required/></Fieldset>
            <Fieldset><label>Üzenet</label><Textarea name="textarea" cols={40} rows={5} ref={message} required/></Fieldset>
            <Submit type="submit" value="Küldés"/>
        </Form>
        </Content>
        </StyledContacts>
        </>
    );
}

export default Contacts;