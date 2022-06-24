import React, { useEffect } from "react";
import styled from "styled-components";
import HomeSlider from "./HomeSlider";
import HomeViewer from "./HomeViewer";
import HomeMovie from "./HomeMovie";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      // tempMovies = [
      //   {
      //     id: 1,
      //     cardImg: "images/viewers-disney.png",
      //     backgroundImg: "",
      //     description: "",
      //     subTitle: "",
      //     title: "",
      //   },
      //   {
      //     id: 2,
      //     cardImg: "images/viewers-disney.png",
      //     backgroundImg: "",
      //     description: "",
      //     subTitle: "",
      //     title: "",
      //   },
      // ];
      console.log(tempMovies);
      dispatch(setMovies(tempMovies));
    });
  }, []);
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
    background: url("/images/home-background.png") center center / cover fixed
      no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
