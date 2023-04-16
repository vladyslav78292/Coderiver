import React from "react";
import { NavLink } from 'react-router-dom';
import './NavLinkBar.scss';

type Props = {
  to: string,
  title: string,
};

export const NavLinkBar: React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={'navLink'}
  >
    {title}
  </NavLink>
);
