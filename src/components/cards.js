import React from "react";
import "../App.css";
import "../css/offers.css"
import Whirligig from 'react-whirligig'
import img1 from "../images/card3.jpg"
import img2 from "../images/card1.jpg";
import img3 from "../images/card2.jpg";
import img4 from "../images/card6.jpg";

import popularimg1 from "../images/most popular/img4.jpg"
import popularimg2 from "../images/most popular/img5.jpg"
import popularimg3 from "../images/most popular/img6.png"
import popularimg4 from "../images/most popular/img7.jpg"



import {
    Card,
    Button,
  } from "react-bootstrap";

function Cards(){

let whirligig
const next = () => whirligig.next()
const prev = () => whirligig.prev()


const populardata = [
  {
    Image: popularimg1,
    Title: "Sanitizers",
  },
  {
    Image: popularimg2,
    Title: "Stationery",
    
  },
  {
    Image: popularimg3,
    Title: "Led Bulbs",
  },
  {
    Image: popularimg4,
    Title: "Masks",
  },

];

    return(
   <div>
    {/* <button onClick={prev}>Prev</button> */}
    {" "}
    <br/>
    <br/>
    <div >
       <h2 className="head1">My Smart Basket</h2>
    </div>
    <Whirligig
      visibleSlides={4}
      gutter="0em"
      ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
    >
         <Card style={{ width: '18rem' }} className="card1">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
             <Card.Title>Carrot</Card.Title>
              <Card.Text>
              500g-Rs9.90
              </Card.Text>
              <Button variant="primary">Add To Cart<i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </Button>
          </Card.Body>
         </Card>

         
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body >
             <Card.Title>Tomato</Card.Title>
              <Card.Text>
              1kg-Rs29.00
              </Card.Text>
              <Button variant="primary">Add To Cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></Button>
          </Card.Body>
         </Card>

         
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
             <Card.Title>Cabege</Card.Title>
              <Card.Text>
               250gm-Rs20.00
              </Card.Text>
              <Button variant="primary">Add To Cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></Button>
          </Card.Body>
         </Card>


         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
             <Card.Title>Broccoli</Card.Title>
              <Card.Text>
              Rs79.00
              </Card.Text>
              <Button variant="primary">Add To Cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></Button>
          </Card.Body>
         </Card>
    </Whirligig>
    {/* <button onClick={next}>Next</button> */}


  <div>
      <br/>
      <br/>
      <div >
        <h2 className="head1">Most Pooplar</h2>
      </div>

    <wrap>
        {populardata.map((offers) => {
          return (
            <card className="popularimg">
              <img src={offers.Image} className="offers-image"></img>
              <div class="img-text" >{offers.Title}</div>
            </card>
          );
        })}
    </wrap>


  </div>

  </div>


    );
}

export default Cards;


