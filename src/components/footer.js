import React from "react";
import "../App.css";
import "../css/footer.css"

function Footer() {
    return(

    <div>
        <section id="footer" className="footer">
          <div className="footerBg" />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="contact-form btm-brdr">
                  <div className="form-Box">
                    <input type="text" placeholder="Name" className="b_effect" />
                  </div>
                  <div className="form-Box">
                    <input type="text" placeholder="Email" className="b_effect" />
                  </div>
                  <div className="form-Box">                              
                  <textarea placeholder="Message" className="b_effect" defaultValue={""} />
                  </div>
                  <div className="form-Box">
                    <input type="submit" defaultValue="Submit" className="fill-btn" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="contact-address btm-brdr">
                  <h4 className="fTitle"> Contact <span>Us</span> </h4>
                  <ul>
                    <li> <i className="fa fa-phone" aria-hidden="true" /> <span>1800 88 6665 22</span> </li>
                    <li> <i className="fa fa-map-marker" aria-hidden="true" /> <span> India</span> </li>
                    <li><i className="fas fa-envelope" aria-hidden="true" /><span>bigbasket@gmail.com</span> 
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="subscribe btm-brdr">
                  <h4 className="fTitle"> Subscribe <span>Big Basket</span> </h4>
                  <form>
                    <input type="text" placeholder="Example@example.com" />                                
                    <button type="button" className="fill-btn">Subscribe</button>
                  </form>
                </div>
                <div className="social-icons">
                  <h4 className="fTitle"> Social <span>News</span> </h4>
                  <ul>
                    <li><a href="'#" target="_blank"> <i className="fab fa-facebook" aria-hidden="true" /> </a></li>
                    <li> <a href="'#" target="_blank"> <i className="fab fa-twitter" aria-hidden="true" /> </a></li>
                    <li><a href="'#" target="_blank"> <i className="fab fa-youtube" aria-hidden="true" /> </a></li>
                    <li><a href="'#" target="_blank"> <i className="fab fa-instagram" aria-hidden="true" /> </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer Section Ends */}
        {/* copyright Section Begins */}
        <section id="copyright" className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h6> © 2021 Made By Shriyash <a href="#" target="_blank">BB.</a> </h6>
              </div>
            </div>
          </div>
        </section>
        {/* copyright Section Ends */}
    </div>
   

    );
}

export default Footer;