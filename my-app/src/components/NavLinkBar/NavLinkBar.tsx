import React from "react";
import { NavLink } from 'react-router-dom';
import './NavLinkBar.scss';

type Props = {
  to: string,
  title: string,
  setIsBurgerMenuOpen: (type: boolean) => void;
};

export const NavLinkBar: React.FC<Props> = ({ to, title, setIsBurgerMenuOpen }) => (
  <NavLink
    to={to}
    className={'navLink'}
    onClick={ () => setIsBurgerMenuOpen(false)}
  >
    {title}
  </NavLink>
);
