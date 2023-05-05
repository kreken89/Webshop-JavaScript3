import React from 'react'
import '../App.css'

import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter, BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-general footer-content-container">
          <img src="../../public/logo.png" alt="Our logo"></img>
          <h4>869, Miyan road, Y4 456 Mona Town.</h4>
          <h4>Office No 3456.</h4>
          <h4>info@example.com</h4>
          <h4>+234-58286909</h4>
        </div>
        <div className="footer-links footer-content-container">
          <h3>Links.</h3>
          <a href="">LED light source</a>
          <a href="">Pendant Lamp</a>
          <a href="">Floor Lamp</a>
          <a href="">LED Pendant Lamp</a>
          <a href="">Table Lamp</a>
        </div>
        <div className="footer-about footer-content-container">
        <h3>About Us.</h3>
          <a href="">About Us</a>
          <a href="">Blog</a>
          <a href="">Contact Us</a>
          <a href="">Sign in</a>
          <a href="">My account</a>
        </div>
        <div className="footer-contact footer-content-container">
          <h3>Contact Us.</h3>
          <p>We are availble eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
          <div className="social-icons">
            <span><FaFacebook /></span>
            <span><BsTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><BsPinterest /></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">©2020 CopyRight Example. All rights reserved.</div>
      <div></div>
    </div>
  )
}

export default Footer