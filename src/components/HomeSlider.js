import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <SliderContainer {...settings}>
      <SlideContent>
        <img src="images/slider-badag.jpg" />
      </SlideContent>
      <SlideContent>
        <img src="images/slider-badging.jpg" />
      </SlideContent>

      <SlideContent>
        <img src="images/slider-scale.jpg" />
      </SlideContent>
      <SlideContent>
        <img src="images/slider-scales.jpg" />
      </SlideContent>
    </SliderContainer>
  );
}

export default HomeSlider;

const SliderContainer = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  margin-top: 20px;
  img {
    border: solid 4px transparent;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 2px 0 rgba(0, 0, 0, 0.19);
    transition-duration: 500ms;
    :hover {
      border: solid 4px rgb(249, 249, 249, 0.8);
    }
  }
`;
