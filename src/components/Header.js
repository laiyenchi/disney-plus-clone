import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo />
      <NavMenu></NavMenu>
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: black;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div``;
