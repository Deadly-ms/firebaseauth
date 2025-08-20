import React from 'react'
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "/src/App.css"; 


export const Footer = () => {
  return (
    <>
    <div>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>

            <div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
            <FaLinkedinIn />
          </a>
        </div>
        </div>
            

            <div className="newsletter">
              <h4>Newsletter</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Deadly future is our hand. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#sitemap">Sitemap</a>
              <a href="#accessibility">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>

    </div>
    </>
  )
}


// import React from 'react';


// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-content">
//           <div className="footer-section">
//             <h3 className="footer-title">Company</h3>
//             <ul className="footer-links">
//               <li><a href="#about">About Us</a></li>
//               <li><a href="#services">Services</a></li>
//               <li><a href="#careers">Careers</a></li>
//               <li><a href="#news">News</a></li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h3 className="footer-title">Support</h3>
//             <ul className="footer-links">
//               <li><a href="#contact">Contact</a></li>
//               <li><a href="#help">Help Center</a></li>
//               <li><a href="#faq">FAQ</a></li>
//               <li><a href="#support">Support</a></li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h3 className="footer-title">Legal</h3>
//             <ul className="footer-links">
//               <li><a href="#privacy">Privacy Policy</a></li>
//               <li><a href="#terms">Terms of Service</a></li>
//               <li><a href="#cookies">Cookie Policy</a></li>
//               <li><a href="#disclaimer">Disclaimer</a></li>
//             </ul>
//           </div>

//           <div className="footer-section">
//             <h3 className="footer-title">Connect</h3>
//             <div className="social-links">
//               <a href="#facebook" className="social-link">Facebook</a>
//               <a href="#twitter" className="social-link">Twitter</a>
//               <a href="#linkedin" className="social-link">LinkedIn</a>
//               <a href="#instagram" className="social-link">Instagram</a>
//             </div>
//             <div className="newsletter">
//               <h4>Newsletter</h4>
//               <div className="newsletter-form">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email"
//                   className="newsletter-input"
//                 />
//                 <button className="newsletter-btn">Subscribe</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="footer-bottom-content">
//             <p className="copyright">
//               © 2025 Your Company Name. All rights reserved.
//             </p>
//             <div className="footer-bottom-links">
//               <a href="#sitemap">Sitemap</a>
//               <a href="#accessibility">Accessibility</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;