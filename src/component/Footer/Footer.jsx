import React from 'react'
import FooterLogo from '../../assets/watchwave_transparent.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-website-description">
        <div className="website-description-footer">
                <div className="footer-logo">
                    <img src={FooterLogo} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur consectetur quasi ducimus autem vitae praesentium atque illo harum est numquam voluptas quas, quos dolor.
                </p>
                <div className="footer-website-links">
                    
                    <ul>
                        <li ><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-youtube"></i></li>
                    </ul>
                </div>
            </div>
            </div>
        <div className="footer-section">
            <div className="footer-links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Top Rated</a></li>
                    <li><a href="">Upcoming</a></li>
                </ul>

                
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="">Live</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Premium</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>

              
            </div>
            <div className="footer-links">
                <ul>
                    <li><span>Phone: +91 12345678</span></li>
                    <li><span>Email: watchwave@gmail.com</span></li>
                </ul>

                
            </div>
        </div>
    </div>
  )
}

export default Footer
