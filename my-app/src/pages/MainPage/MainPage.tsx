import React, { useState } from 'react';
import { Thread } from '../../components/Thread/Thread.tsx';
import './MainPage.scss';
import { Header } from '../../components/Header/Header.tsx';
import { CreateBlock } from '../../components/CreateBlock/CreateBlock.tsx';
import { Slider } from '../../components/Slider/Slider.tsx';
import { AboutSection } from '../../components/AboutSection/AboutSection.tsx';
import text_mask_woman from '../../images/text-mask-woman.svg';
import { useWindowSize } from '../../utils/helper.ts';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu.tsx';

export const MainPage = () => {
  const [image, setImage] = useState(text_mask_woman);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const[isImageClicked, setIsImageClicked] = useState(false);
  const windowWidth = useWindowSize().width;

  return (
    <div className='main_page_container'>
      <Header isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
      {( isBurgerMenuOpen && windowWidth < 1399 ) ? (
        <BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
      ) : (
        <>
          <Thread />
          <CreateBlock image={image} isImageClicked={isImageClicked} />
          <div className='information_container'>
            <Slider setImage={setImage} setIsImageClicked={setIsImageClicked} />
            <AboutSection />
          </div>
        </>
      )}
    </div>
  )
}
