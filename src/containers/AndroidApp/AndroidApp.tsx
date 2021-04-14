import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { appDesc, appName } from '../../content';
import '../../index.css';

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

export const AndroidApp = () => {
    return (
        <>
            <Helmet>
                <title>Android Alkalmazás - Kauer András</title>
            </Helmet>
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