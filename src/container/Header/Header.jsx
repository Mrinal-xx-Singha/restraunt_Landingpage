import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
  <div className='app__wrapper_info'>
     <SubHeading title='Your belly knows best'/>
     <h1 className='app__header-h1'>Where every flavor tells a story.</h1>
     <p className='p__opensans' style={{ margin: '2rem 0'}}>We all have our favorite restaurant that we prefer to dine in.But There is always that one restaurant that you will resort back to when you dont feel like taking the risk of trying a new place out.</p>
     <button type='button' className='custom__button'>Explore Menu</button>
     </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='headerimg'/>
    </div>
  </div>
);

export default Header;
