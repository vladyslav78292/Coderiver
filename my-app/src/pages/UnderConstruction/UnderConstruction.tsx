import React from 'react';
import underConstruction from '../../images/underConstruction.png';
import './UnderConstruction.scss';
import { NavLink } from 'react-router-dom';

export const UnderConstruction = () => (
  <div className='construction'>
    <h1 className='construction_title'>Page Under Construction</h1>
    <NavLink
      className='construction_link' to={'/'}
    >
      Back to home page
    </NavLink>
    <img
      alt='under construction'
      src={underConstruction}
      className='construction_image' 
    />
  </div>
)