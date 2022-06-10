import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <Logos src="images/cta-logo-one.svg"></Logos>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get 12 months for the price of 10 when you sign up for an annual
          Disney+ subscription, compared to paying monthly.
        </Description>
        <LogosTwo src="images/cta-logo-two.png"></LogosTwo>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  //   position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    // background-position: top;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-image: url("images/login-background.jpg");
    background: url("images/login-background.jpg") center / cover fixed
      no-repeat;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.9;
  }
`;

const Content = styled.div`
  max-width: 700px;
  width: 80%;
  padding: 30px 20px;
`;

const Logos = styled.img``;

const SignUp = styled.a`
  display: block;
  width: 100%;
  background-color: #0063e5;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
  letter-spacing: 2.5px;
  margin: 10px 0;
  :hover {
    background-color: #0483ee;
    transform: scale(1.005);
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.1px;
  line-height: 1.5;
`;

const LogosTwo = styled.img`
  width: 100%;
  margin: 10px 0;
`;
