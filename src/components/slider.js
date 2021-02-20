import React from "react";
import "../App.css";
import img1 from "../images/BigBasket-Offer.jpg"
import img2 from "../images/img2.jpg";
import img4 from "../images/img4.jpg";

import {
    Carousel
  } from "react-bootstrap";

function Slider(){
    return(
         
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="First slide"
      src={img1}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Second slide"
      src={img2}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="Third slide"
      src={img4}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    );
}

export default Slider;