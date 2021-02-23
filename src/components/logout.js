import React from "react";
import "../css/logout.css"
import {Link} from "react-router-dom"

function Logout() {

        
    return(

        <div class="bg-img">
      <div class="content">
        <header>Signup Form</header>
        <form action="#">
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone"/>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Password"/>
            <span class="show">SHOW</span>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Retype Password"/>
            <span class="show">SHOW</span>
          </div>
          <br/>
          <br/>
          <div class="field">
            <input type="submit" value="SIGNUP"/>
          </div>
          <div class="field1">
            <Link to={'/'}>Home</Link>
          </div>
        </form>
      </div>
    </div>

    );
}

export default Logout;