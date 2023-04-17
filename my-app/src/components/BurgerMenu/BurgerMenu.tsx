import React from "react";
import { NavLinkBarBurger } from "../NavLinkBarBurger";
import './BurgerMenu.scss';

type Props = {
  setIsBurgerMenuOpen: (type: boolean) => void,
};

export const BurgerMenu: React.FC<Props> = ({ setIsBurgerMenuOpen }) => (
  <div className='burger_nav'>
    <nav className='burger_navLink'>
      <ul className='burger_list'>
        <NavLinkBarBurger to={'/'} title={'Home'} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
        <NavLinkBarBurger to={'/clothes'} title={'Clothes'} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
        <NavLinkBarBurger to={'/sneakers'} title={'Sneakers'} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
        <NavLinkBarBurger setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/bags'} title={'Bags'}/>
        <NavLinkBarBurger setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/accessorize'} title={'Accessorize'}/>
        <NavLinkBarBurger setIsBurgerMenuOpen={setIsBurgerMenuOpen} to={'/cart'} title={'Buy'}/>
      </ul>
    </nav>
  </div>
);