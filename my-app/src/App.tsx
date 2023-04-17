import './styles/globalStyles.scss';
import React from 'react';
import { MainPage } from './pages/MainPage/MainPage';
import { Navigate, Route, Routes } from 'react-router';
import { UnderConstruction } from './pages/UnderConstruction';
import { NotFound } from './pages/NotFound/NotFound';

// additionally made the page a stub for links in the header and the page was not found

const App = () => (
  <div className="container">
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/Coderiver' element={<MainPage />} />
      <Route path='/home' element={<Navigate to='/' replace />} />
      <Route path='/clothes' element={ <UnderConstruction />} />
      <Route path='/sneakers' element={ <UnderConstruction />} />
      <Route path='/bags' element={ <UnderConstruction />} />
      <Route path='/accessorize' element={ <UnderConstruction />} />
      <Route path='/cart' element={ <UnderConstruction />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
)

export default App;
