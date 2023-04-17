import React, { useEffect } from 'react';
import './CreateBlock.scss';
import appAvailible from '../../images/appAvailible.svg';
import anime from 'animejs';

type Props = {
  image: string,
  isImageClicked: boolean,
};

export const CreateBlock:React.FC<Props> = ({ image, isImageClicked }) => {


  useEffect (() => {
    // anime js libraby. helped me to animete text-mask and text inside class '.create_title'
    const selectedImage = document.getElementById('textmask') as HTMLImageElement;

    if (selectedImage) {
      const imageHeight = selectedImage.clientHeight;
      selectedImage.style.clipPath = `inset(${imageHeight}px 0px 0px 0px)`
    }

    anime({
      targets: selectedImage,
      clipPath: `inset(0px 0px 0px 0px)`,
      easing: `easeOutQuad`,
      duration: 3000,
    });
  }, []);

  return (
    <>
      <div className="create_container"  id='textmask'>
        <div className='create_title_container'>
          <h2 className='create_title' >
            Choose your <br></br>winter &nbsp;<span className='create_title_look'> look </span> <br></br> apparel<div className='create_star create_title'>*</div>
          </h2>
        </div>
        {/* this code helped me animate the image switching when i click on the image in the slider */}
        {isImageClicked ? (
          <div
          className='create_text_container create_text_container_clicked'
        >
          <img src={image} className='create_text'/>

        </div>
        ) : (
          <div
            className='create_text_container create_text_container_open'
          >
            <img src={image} className='create_text'/>
          </div>
        )}

      </div>
      <div className='app_availible'>
        <img
          src={appAvailible}
          alt="App availible icon"
          className='availible_icon'
        />
      </div>
    </>
  )
}