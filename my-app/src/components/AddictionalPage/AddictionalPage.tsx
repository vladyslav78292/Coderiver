import React from 'react';
import './AddictionalPage.scss';
import { NavLink } from 'react-router-dom';

type Props = {
  image: string,
  text: string,
};

export const AddictionalPage: React.FC<Props> = ({ image, text }) => (
  <div className='addictional'>
    <h1 className='addictional_title'>
      {text}
    </h1>
    <NavLink
      className='addictional_link' to={'/'}
    >
      Back to home page
    </NavLink>
    <img
      alt='under construction'
      src={image}
      className='addictional_image' 
    />
  </div>
)