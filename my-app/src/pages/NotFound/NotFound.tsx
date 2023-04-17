import React from 'react';
import notFound from '../../images/notFound.png';
import './NotFound.scss';
import { AddictionalPage } from '../../components/AddictionalPage';

export const NotFound = () => (
  <AddictionalPage image={notFound} text='Page Not Found'/>
)