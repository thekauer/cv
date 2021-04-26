import styled from 'styled-components';

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
    @media (max-width:598px) {
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
    @media (max-width:598px) {
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
        <Form  method="post">
            <Fieldset><label>Név</label><Input type="text"/></Fieldset>
            <Fieldset><label>Email</label><Input type="email"/></Fieldset>
            <Fieldset><label>Üzenet</label><Input type="text"/></Fieldset>
            <Submit type="submit" value="Küldés"/>
        </Form>
        </Content>
        </StyledContacts>
        </>
    );
}

export default Contacts;