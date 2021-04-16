import Head from 'next/head';
import styled from 'styled-components';
import { appDesc, appName } from '../content';
;

const StyledAndroid = styled.article`
    & * {
        color:var(--active-font-color);
    }
`
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding:5em 0;
    background-color: var(--green);
`

export default function AndroidApp() {
    return (
        <>
            <Head>
                <title>Android Alkalmazás - Kauer András</title>
            </Head>
            <StyledAndroid>
                <Header>
                    <div>
                    <h1>{appName}</h1>
                    <em>{appDesc}</em>
                    </div>
                </Header>

            </StyledAndroid>
        </>
    );
}