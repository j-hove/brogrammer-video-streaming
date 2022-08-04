import styled from "styled-components";
// import './LoginPage.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = (props) => {
    let navigate = useNavigate();
    const [data,setData] = useState();
    const getData = (val) => {setData(val.target.value)}

    return (
        <Container>
            <Content>
                <LogoDiv>
                    <Logo href="https://www.facebook.com/">
                        <img src="/images/logo.svg" alt="Disney+ Logo"/>
                    </Logo>
                </LogoDiv>
                <h3>Log in with your email</h3>
                <label className="errorEmail"></label>
                <input type="email" placeholder="Email address" onInput={getData} />
                <button onClick={
                    data=="admin@disney.com"?() => {
                        navigate("/login/password")                                        
                    }:null
                }>
                    Continue
                </button>
                <p>
                    New to Disney+? <a>Sign up</a>
                </p>
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
    min-height: 80vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 20px;
    height: 100%;

    h3 {
        margin: 0 0 10px 0;
        width: 350px;
        text-align: left;   
        font-size: 21px;     
    }

    input {        
        border-radius: 5px;
        margin: 20px;
        width: 350px;
        position: relative;
        border: 2px solid rgba(151, 151, 151, 0.34);
        background-color: #31343e;
        padding: 16px 10px;
        color: #f9f9f9;
        font-size: 15px;
    }

    button {
        font-weight: bold;
        margin: 10px;
        color: #f9f9f9;
        background-color: #0063e5;
        width: 350px;
        letter-spacing: 1.5px;
        font-size: 18px;
        padding: 12px 0;
        border: 1px solid transparent;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #0483ee
        }
    }

    p {
        margin: 25px;
        width: 350px;
        text-align: left;  
    }
`;

const LogoDiv = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const Logo = styled.a`
    margin-bottom: 30px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 25%;
    max-height: 175px;
`

export default LoginPage