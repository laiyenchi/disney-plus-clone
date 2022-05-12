import React from "react";
import styled from "styled-components";

function HomeViewer() {
  return (
    <Container>
      <Wraper>
        <img src="images/viewers-disney.png" />
      </Wraper>
      <Wraper>
        <img src="images/viewers-pixar.png" />
      </Wraper>
      <Wraper>
        <img src="images/viewers-marvel.png" />
      </Wraper>
      <Wraper>
        <img src="images/viewers-starwars.png" />
      </Wraper>
      <Wraper>
        <img src="images/viewers-national.png" />
      </Wraper>
    </Container>
  );
}

export default HomeViewer;

const Container = styled.div`
  margin-top: 50px;
  //   display: grid;
  //   grid-template-columns: repeat(5, minmax(0, 1fr));
  //   grid-gap: 25px;
  display: flex;
  justify-content: space-between;
`;

const Wraper = styled.div`
  width: 200px;
  height: 100px;
  border: solid 3px rgb(249, 249, 249, 0.5);
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 26px 30px -10px rgb(0 0 0 / 69%),
    0 16px 10px -10px rgb(0 0 0 / 73%);
  transition-duration: 250ms;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover {
    border-color: white;
    transform: scale(1.05);
  }
`;
