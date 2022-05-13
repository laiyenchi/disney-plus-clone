import React from "react";
import styled from "styled-components";
import HomeSlider from "./HomeSlider";
import HomeViewer from "./HomeViewer";
import HomeMovie from "./HomeMovie";
function Home() {
  return (
    <Main>
      <HomeSlider />
      <HomeViewer />
      <HomeMovie />
    </Main>
  );
}

export default Home;

const Main = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  &:before {
    content: "";
    background: url("images/home-background.png") center center / cover fixed
      no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
