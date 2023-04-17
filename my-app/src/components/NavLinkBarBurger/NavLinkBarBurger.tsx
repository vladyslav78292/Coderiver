import React from 'react';
import { NavLink } from "react-router-dom";
import './NavLinkBarBurger.scss';
import classNames from 'classnames';

type Props = {
  to: string,
  title:string,
  setIsBurgerMenuOpen: (type: boolean) => void,
};

export const NavLinkBarBurger: React.FC<Props> = ({ to, title, setIsBurgerMenuOpen }) => (
  <li className={'navLinkBarBurger_element'}>
  <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('navLinkBarBurger', {
          'activeLink': isActive,
        })
      }
      onClick={ () => setIsBurgerMenuOpen(false)}
    >
      {title}
    </NavLink>
  </li>
);
