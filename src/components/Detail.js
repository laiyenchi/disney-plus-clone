import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <BackgroundImage>
        <img src="images/turning_red.jpg" />
      </BackgroundImage>
      <ImageTitle>
        <img src="images/turning_red_logo.png" />
      </ImageTitle>
      <Controls>
        <Play>
          <img src="images/play-icon-black.png" />
          <span>PLAY</span>
        </Play>
        <Trailer>
          <img src="images/play-icon-white.png" />
          <span>TRAILER</span>
        </Trailer>
        <Buttons>
          <AddFavorite>
            <span>+</span>
          </AddFavorite>
          <Share>
            <img src="images/group-icon.png" />
          </Share>
        </Buttons>
      </Controls>
      <Description>
        <p>Growing up is a beast.</p>
        <p>
          Disney and Pixar’s Turning Red is now streaming on Disney+, and
          available on Digital, DVD and Blu-ray.
        </p>
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
`;

const ImageTitle = styled.div`
  margin-top: 40px;
  width: 350px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: default;
  }
`;

const Controls = styled.div`
  margin-top: 25px;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  span {
    font-size: 28px;
    letter-spacing: 1.5px;
  }
`;

const Play = styled.div`
  width: 150px;
  height: 60px;
  border-radius: 5px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 250ms;

  span {
    color: black;
  }
  :hover {
    background: rgb(198, 198, 198);
  }
`;

const Trailer = styled.div`
  border: solid 1px rgb(249, 249, 249);
  width: 180px;
  height: 60px;
  border-radius: 5px;
  background: rgb(68, 68, 68, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 250ms;

  :hover {
    border-color: rgb(249, 249, 249, 0.6);
    background: rgb(249, 249, 249, 0.6);
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
  }
`;

const AddFavorite = styled.button`
  width: 44px;
  height: 44px;
  border: solid 3.5px white;
  border-radius: 50%;
  background: rgb(35, 35, 35, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 28px;
    color: white;
  }
`;

const Share = styled(AddFavorite)`
  background: rgb(0, 0, 0);
`;

const Description = styled.div`
  p {
    font-size: 25px;
    color: rgb(255, 255, 255);
  }
`;
