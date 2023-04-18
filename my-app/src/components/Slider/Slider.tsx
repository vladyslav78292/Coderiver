import React, { useState } from 'react'
import './Slider.scss';
import woman from '../../images/woman.png';
import legs from  '../../images/legs.png';
import shoes from  '../../images/shoes.png';
import nature from '../../images/nature.png';
import hoodie from  '../../images/hoodie.png';
import arrowLeft from '../../images/arrow_left.svg';
import arrowRight from  '../../images/arrow_right.svg';
import text_mask_legs from '../../images/text-mask-legs.svg';
import text_mask_woman from '../../images/text-mask-woman.svg';
import text_mask_hoodie from '../../images/text-mask-hoodie.svg';
import text_mask_nature from '../../images/text-mask-nature.svg';
import text_mask_shoes from '../../images/text-mask-shoes.svg';
import { useWindowSize } from '../../utils/helper';

type Props = {
  setImage: (image: string) => void,
  setIsImageClicked: (type: boolean) => void,
};

type ImagesObject = {
  image: string,
  text_mask: string,
};

export const Slider: React.FC<Props> = ({ setImage, setIsImageClicked }) => {  
  const [position, setPosition] = useState(0);
  const windowWidth = useWindowSize().width;
  const [timerId, setTimerId] = useState(0);
  
  let images: ImagesObject[] = [];
  const initialImages = [
    {
      // the first element of the object for the slider, the second for the text-mask
      image: legs,
      text_mask: text_mask_legs,
    }, {
      image: hoodie,
      text_mask: text_mask_hoodie,
    }, {
      image: nature,
      text_mask: text_mask_nature,
    }, {
      image: woman,
      text_mask: text_mask_woman,
    }, {
      image: shoes,
      text_mask: text_mask_shoes,
    }];

// if the width of the window is less than 720, then the last time you click on the button to the right in the slider, there may be some empty space. 
// It would be a good idea to replace this empty place with the first picture, and make a button disable.

  if (windowWidth < 720) {
    images = [...initialImages, { image: legs, text_mask: text_mask_legs }];
  } else {
    images = [...initialImages];
  }
// 300 because 268px width of image + 32px gap
  const moveCard = 300 * position;

// when user click on the picture, first 0.5 seconds there is an animation, then the picture changes. so the delay is 0.5 seconds

  const changeImage = (link: string) => {
    setImage(link);
  };

  const handleClick = (link: string) => {
    clearTimeout(timerId);

    const id = window.setTimeout(() => {
      changeImage(link);
      setIsImageClicked(false);

    }, 500);

    setTimerId(id);
  }

  const disableRightDesktop = (position <= -1 && windowWidth >= 1400);
  const disableRightTablet = (position <= -2 && windowWidth < 1400 && windowWidth > 1024);
  const disableRightSmallTablet = (position <= -3 && windowWidth < 1025 && windowWidth > 719);
  const disableRightMobile = (position <= -4 && windowWidth < 720);


  return (
    <div className='slider'>
      <h2 className='slider_head'>
        <div className='slider_head_container'>
          Choose looks
        </div>
      </h2>
      <div className='slider_buttons'>
          <button
            className='slider_button slider_button_right'
            onClick={() => {
              setPosition((position) => position - 1)
            }}
            disabled={disableRightDesktop || disableRightTablet || disableRightSmallTablet || disableRightMobile}
          >
            <img src={arrowRight} alt="previous button" className='slider_image' />
          </button>
          <button
            className='slider_button slider_button_left'
            onClick={() => {
              setPosition((position) => position + 1)
            }}
            disabled={position === 0}
          >
            <img src={arrowLeft} alt="next button" className='slider_image' />
          </button>
        </div>
      <div className='slider_cards'>
        {images.map((picture) => (
          <button 
            style={{ transform: `translateX(${moveCard}px)`}} 
            key={picture.image}
            className='slider_card'
            onClick={() => {
              handleClick(picture.text_mask)
              setIsImageClicked(true)
            }}
          >
            <img src={picture.image} className='slider_card_img'/>
          </button>
        ))}
      </div>
    </div>
  )
}