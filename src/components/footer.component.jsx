import React from 'react'

import './footer.styles.scss'

import SocialMediaLinks from './social-media-links.component'

import { ReactComponent as Logo } from "../assets/images/themthings.svg";


const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container">
        <Logo className='logo' />
        <SocialMediaLinks />
        <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} {props.title} | All
            rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer