import React from 'react';
import './Header.scss';
import { NavLinkBar } from '../NavLinkBar/NavLinkBar.tsx';
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header_container'>
      <div className='header_logo'>
        <NavLink
          to={'/'}
        >
          <img
            src="../../../../images/LANDING.png"
            alt='Langing page logo'
            className='header_logo_image'
          />
        </NavLink>
      </div>
      <div className='header_nav'>
        <nav className='header_navlink'>
          <ul className='header_list'>
            <li className='header_list_element'>
              <NavLinkBar to={'/clothes'} title={'Clothes'}/>
            </li>
            <li className='header_list_element'>
              <NavLinkBar to={'/sneakers'} title={'Sneakers'}/>
            </li>
            <li className='header_list_element'>
              <NavLinkBar to={'/bags'} title={'Bags'}/>
            </li>
            <li className='header_list_element'>
              <NavLinkBar to={'/accessorize'} title={'Accessorize'}/>
            </li>
            <li className='header_list_element'>
              <NavLink
                to={'/cart'}
              >
                <p className='header_buy'>Buy</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};
