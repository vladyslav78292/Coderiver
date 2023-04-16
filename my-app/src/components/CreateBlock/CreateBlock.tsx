import React from 'react';
import './CreateBlock.scss';

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
          style={{backgroundImage: `url(${image})` }}
          id='text-mask'
        >
          <p className='create_text create_text_part1'>CR</p>
          <p className='create_text create_text_part2'>EA</p>
          <p className='create_text create_text_part3'>TE</p>
        </div>
        ) : (
          <div
            className='create_text_container create_text_container_open'
            style={{backgroundImage: `url(${image})` }}
            id='text-mask'
          >
            <p className='create_text create_text_part1'>CR</p>
            <p className='create_text create_text_part2'>EA</p>
            <p className='create_text create_text_part3'>TE</p>
          </div>
        )}

      </div>
      <div className='create_star create_title'>*</div>
    </>
  )
}