import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"


const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playStore"/>
        <img src={appStore} alt='Appstore'/>
      </div>
      <div class="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first Priority</p>
        <p>Copyrights 2024 &copy; Pramod Kumar</p>
      </div>
      <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href='https://www.linkedin.com/in/pramod-kumar-1b8470258/'>Linked in</a>
        <a href='https://github.com/pramodkumar5921'>Github</a>
        <a href='https://leetcode.com/u/pramodkumar808751528270/' >Leetcode</a>
      </div>
    </footer>
  );
}

export default Footer
