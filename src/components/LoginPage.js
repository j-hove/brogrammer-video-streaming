import styled from "styled-components";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";


const LoginPage = (props) => {
    let navigate = useNavigate();
    return (
        <Container>
            <Content>
                <LogoDiv>
                    <Logo href="https://www.facebook.com/">
                        <img src="/images/logo.svg" alt="Disney+ Logo"/>
                    </Logo>
                </LogoDiv>
                <h3>Enter your email</h3>
                <input placeholder="Email" />
                <button onClick={() => {
                    navigate("/login/password");
                    }}>Next</button>
            </Content>            
        </Container>
    )
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const LogoDiv = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Logo = styled.a`
    margin-bottom: 40px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 25%;
    max-height: 175px;
`

export default LoginPage