import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';


const Footer = () => (
  <div className='app__footer section__padding' id='contack'>
    <FooterOverlay />
    <Newsletter />


    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur .</p>
        <p className='p__opensans'>+91 8337839476</p>
        <p className='p__opensans'>+91 8337839476</p>


      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='images_logo'/>
        <p className='p__opensans'>"You only live once, but if you do it right, once is enough." </p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>


      </div>
      <div className='app__footer-links_works'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00Am - 9:00PM</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00Am - 6:00PM</p>

      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>Made with ❤️ 2023 @Mrinal Singha</p>
    </div>
  </div>
);

export default Footer;
