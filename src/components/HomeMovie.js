import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function HomeMovie() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h3>Recommended For You</h3>
      <Wrapper>
        {movies &&
          movies.map((movie) => (
            <Movies key={movie.id}>
              <Link to={`/Detail/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Movies>
          ))}
      </Wrapper>
    </Container>
  );
}

export default HomeMovie;
const Container = styled.div`
  margin-top: 25px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 50px;
  margin: 30px 0;
`;

const Movies = styled.div`
  border: solid 3px rgb(249, 249, 249, 0.5);
  border-radius: 5px;
  box-shadow: 0 26px 30px -10px rgb(0 0 0 / 69%),
    0 16px 10px -10px rgb(0 0 0 / 73%);
  transition-duration: 300ms;
  img {
    width: 100%;
    height: 100%;
    object-fix: conver;
  }

  :hover {
    border-color: white;
    transform: scale(1.05);
  }
`;
