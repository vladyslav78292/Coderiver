import React, { useEffect } from 'react';
import './AboutSection.scss';

export const AboutSection = () => {
  // when I scroll to this element, it appears on the page
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.about_paragraph') as unknown as HTMLElement[];
  
      const position = window.scrollY + window.innerHeight;
      elements.forEach((element) => {
        if (element.offsetTop < position) {
          element.style.transform = 'translateY(0px)';
        } else {
          element.style.transform = 'translateY(-60px)';
        }
      })
    });
  }, [])

  return (
    <>
      <div className='about_container'>
        <div className='about_title_container'>
          <h1 className='about_title'>More about us</h1>
        </div>
        <div className='about_paragraph_container'>
          <p className='about_paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum. </p>
          <p className='about_paragraph'>Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.</p>
        </div>
      </div>
    </>
  )
};
