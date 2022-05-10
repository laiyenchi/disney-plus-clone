import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu>
        <a>
          <img src="images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" />
          <span>SEARCG</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="images/female-avatar-5.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  padding: 0 30px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 15px;

  a {
    display: flex;
    align-items: center;
    margin: 0 15px;

    img {
      width: 25px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.5px;
      margin-left: 2.5px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        position: absolute;
        opacity: 0;
        transform-origin: left; //without this, it expands from center
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //animate
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 50px;
  border-radius: 50%;
  border: solid white 0.5px;
`;
