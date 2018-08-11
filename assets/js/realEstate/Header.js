import React, {Component} from 'react';

export default class Header extends Component {
 
  
  render () {
    return (
      <div>
       <header>
           <div className="logo"><img src="/img/upscalepad-logo.png" /></div>
           <nav>
               <a href="#">Create Ads</a>
               <a href="#">About Us</a>
               <a href="#">Login</a>
               <a href="#" className="register-btn">Register</a>
           </nav>
       </header>
      </div>
    );
  }
}

