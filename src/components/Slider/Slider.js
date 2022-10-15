import React, { useState, useEffect } from 'react';
import { Image, ImageOverlay } from '../../globalStyles.styled';
import {
  SliderWrapper,
  SliderListContainer,
  SliderList,
  ImageOverlayContainer,
} from './Slider.styled';

const imgArray = ['https://www.gstatic.com/webp/gallery/1.webp', 'https://www.gstatic.com/webp/gallery/2.webp', 'https://www.gstatic.com/webp/gallery/4.webp'];

const Slider = () => {
  const [cSrc, uSrc] = useState(0);

  useEffect(() => {
    const sliders = document.querySelectorAll(SliderList);
    const timer = setInterval(() => uSrc((prev) => {
      sliders.forEach((each) => {
        each.classList.remove('active');
      });
      if (prev < 2) {
        sliders[prev + 1].classList.add('active');
        return prev + 1;
      }
      sliders[0].classList.add('active');
      return 0;
    }), 4000);
    return () => clearTimeout(timer);
  }, []);

  const sliderDot = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <SliderWrapper>
      <ImageOverlayContainer>
        <Image src={imgArray[cSrc]} alt="game 1" />
        <ImageOverlay />
      </ImageOverlayContainer>
      <SliderListContainer>
        {sliderDot.map((each) => <SliderList key={each.id} className={`slider-${each.id} ${each.id === 1 ? 'active' : ''}`} />)}
      </SliderListContainer>
    </SliderWrapper>
  );
};

export default Slider;
