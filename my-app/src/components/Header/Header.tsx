import React from 'react';
import './Header.scss';
import { NavLinkBar } from '../NavLinkBar/NavLinkBar.tsx';
import { NavLink } from 'react-router-dom'
import landing from  '../../images/LANDING.svg';
import { useWindowSize } from '../../utils/helper.ts';
import burgerMenu from '../../images/burgerMenu.svg';
import closedBurgerMenu from '../../images/Close.svg';

type Props = {
  isBurgerMenuOpen: boolean,
  setIsBurgerMenuOpen: (type: boolean) => void,
};

export const Header: React.FC<Props> = ({ setIsBurgerMenuOpen, isBurgerMenuOpen }) => {
  const windowWidth = useWindowSize().width;
  console.log(useWindowSize().width);

  return (
    <div className='header_container'>
      <div className='header_logo'>
        <NavLink
          onClick={() => setIsBurgerMenuOpen(false)}
          to={'/'}
        >
          <img
            src={landing}
            alt='Langing page logo'
            className='header_logo_image'
          />
        </NavLink>
      </div>
      {windowWidth > 1399 ? (
        <div className='header_nav'>
          <nav className='header_navlink'>
            <ul className='header_list'>
              <li className='header_list_element'>
                <NavLinkBar setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/clothes'} title={'Clothes'}/>
              </li>
              <li className='header_list_element'>
                <NavLinkBar setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/sneakers'} title={'Sneakers'}/>
              </li>
              <li className='header_list_element'>
                <NavLinkBar setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/bags'} title={'Bags'}/>
              </li>
              <li className='header_list_element'>
                <NavLinkBar setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/accessorize'} title={'Accessorize'}/>
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
      ) : (
      <div className='header_nav'>
        <div className='header_navlink'>
          <button className="header_burger ">
            <img
              src={!isBurgerMenuOpen ? burgerMenu : closedBurgerMenu}
              alt="burgerMenu"
              className="header_burger_image"
              onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
            />
          </button>
        </div>
      </div>
      )}
    </div>
  )
}
