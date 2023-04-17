import React from 'react';
import './CreateBlock.scss';
import appAvailible from '../../images/appAvailible.svg';

type Props = {
  image: string,
  isImageClicked: boolean,
};

export const CreateBlock:React.FC<Props> = ({ image, isImageClicked }) => {
  return (
    <>
      <div className="create_container">
        <div className='create_title_container'>
          <h2 className='create_title'>Choose your <br></br>winter &nbsp;<span className='create_title_look'> look </span> <br></br> apparel</h2>
        </div>
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
      <div className='create_star create_title'>*</div>
      <div className='app_availible'>
        <img src={appAvailible} alt="App availible icon" />
      </div>
    </>
  )
}