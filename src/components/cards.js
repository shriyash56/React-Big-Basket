import React from "react";
import "../App.css";
import "../css/offers.css";
import "../css/snacks.css";
import Whirligig from 'react-whirligig'
import img1 from "../images/card3.jpg"
import img2 from "../images/card1.jpg";
import img3 from "../images/card2.jpg";
import img4 from "../images/card6.jpg";

import popularimg1 from "../images/most popular/img4.jpg"
import popularimg2 from "../images/most popular/img5.jpg"
import popularimg3 from "../images/most popular/img6.png"
import popularimg4 from "../images/most popular/img7.jpg"

import snacksimg1 from "../images/snaks/img2.jpeg"
import snacksimg2 from "../images/snaks/img2.jpg"
import snacksimg3 from "../images/snaks/img3.jpg"
import snacksimg4 from "../images/snaks/img4.png"
import snacksimg5 from "../images/snaks/img5.png"



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
      <hr/>
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

    <br/>
    <br/>
    <hr/>
    
    <div>

      <div >
        <h2 className="head1">Snacks And Munchies Corner</h2>
      </div>

      <div className="snacks">
        <img src={snacksimg1} className="snack-item1"></img>
        <div className="innerGrid">
        <img src={snacksimg2} className="snack-item"></img>
        <img src={snacksimg3} className="snack-item"></img>
        <img src={snacksimg4} className="snack-item"></img>
        <img src={snacksimg5} className="snack-item"></img>

        </div>
        
      </div>

    </div>

    <br/>
    <br/>
    <hr/>

    <div className="">

        <div >
          <h2 className="head1">Cleaning And Household</h2>
        </div>


    </div>

  </div>

</div>


    );
}

export default Cards;


