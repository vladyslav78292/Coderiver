import React, { useState } from 'react'
import './Slider.scss';

type Props = {
  setImage: (image: string) => void,
  setIsImageClicked: (type: boolean) => void,
};

export const Slider: React.FC<Props> = ({ setImage, setIsImageClicked }) => {  
  const [position, setPosition] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const woman = '../../images/woman.png';
  const legs = '../../images/legs.png';
  const shoes = '../../images/shoes.png';
  const nature = '../../images/nature.png';
  const hoodie = '../../images/hoodie.png';
  const arrowLeft = '../../images/arrow_left.svg';
  const arrowRight = '../../images/arrow_right.svg';
  const images = [legs, hoodie, nature, woman, shoes];

  const moveCard = 300 * position;

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

  return (
    <div className='slider'>
      <div className='slider_head'>
        <h2 className='slider_title'>Choose looks</h2>
        <div className='slider_buttons'>
          <button
            className='slider_button slider_button1'
            onClick={() => {
              setPosition((position) => position - 1)
            }}
            disabled={position === -1}
          >
            <img src={arrowRight} alt="previous button" className='slider_arrow' />
          </button>
          <button
            className='slider_button slider_button2'
            onClick={() => {
              setPosition((position) => position + 1)
            }}
            disabled={position === 0}
          >
            <img src={arrowLeft} alt="next button" className='slider_image' />
          </button>
        </div>
      </div>
      <div className='slider_cards'>
        {images.map((image) => (
          <button 
            style={{ transform: `translateX(${moveCard}px)` }} 
            key={image}
            className='slider_card'
            onClick={() => {
              handleClick(image)
              setIsImageClicked(true)
            }}
          >
            <img src={image} className='slider_card_img'/>
          </button>
        ))}
      </div>
    </div>
  )
}