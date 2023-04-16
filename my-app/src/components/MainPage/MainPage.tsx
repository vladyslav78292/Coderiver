import React, { useState } from 'react';
import { Thread } from '../Thread/Thread.tsx';
import './MainPage.scss';
import { Header } from '../Header/Header.tsx';
import { CreateBlock } from '../CreateBlock/CreateBlock.tsx';
import { Slider } from '../Slider/Slider.tsx';
import { AboutSection } from '../AboutSection/AboutSection.tsx';

export const MainPage = () => {
  const [image, setImage] = useState('../../../images/woman.png');
  const[isImageClicked, setIsImageClicked] = useState(false);

  return (
    <div className='main_page_container'>
      <Header />
      <Thread />
      <CreateBlock image={image} isImageClicked={isImageClicked}/>
      <div className='test'>
        <Slider setImage={setImage} setIsImageClicked={setIsImageClicked}/>
        <AboutSection />
      </div>
    </div>
  )
}
