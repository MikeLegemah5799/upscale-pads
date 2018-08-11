import React, {Component} from 'react';

export default class Footer extends Component {
 
  
    render () {
      return (
        <div>
         <footer>
          <div>
              <p>&copy; 2018 Affluent Digital, LLC</p>
              <div className="app-btns">
                  <button> <i className="fab fa-google-play"></i> Download The App <br /> on the Play Store </button>
                  <button> <i className="fab fa-apple"></i> Download The App <br /> on the App Store </button>
              </div>
              <ul>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
              </ul>
          </div>
         </footer>
        </div>
      );
    }
}