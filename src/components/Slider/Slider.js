import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Image, ImageOverlay } from '../../globalStyles.styled';
import {
  SliderWrapper,
  SliderListContainer,
  SliderList,
  ImageOverlayContainer,
} from './Slider.styled';

// const imgArray = ['https://www.gstatic.com/webp/gallery/1.webp', 'https://www.gstatic.com/webp/gallery/2.webp', 'https://www.gstatic.com/webp/gallery/4.webp'];

const Slider = () => {
  const tickets = useSelector((state) => state.tickets);
  const [cSrc, uSrc] = useState(0);
  useEffect(() => {
    const sliders = document.querySelectorAll(SliderList);
    const timer = setInterval(() => uSrc((prev) => {
      sliders.forEach((each) => {
        each.classList.remove('active');
      });
      if (prev < 3) {
        sliders[prev + 1].classList.add('active');
        return prev + 1;
      }
      sliders[0].classList.add('active');
      return 0;
    }), 4000);
    return () => clearTimeout(timer);
  }, []);
  if (Object.keys(tickets).length === 0) {
    return <></>;
  }
  const { corousel } = tickets;

  return (
    <SliderWrapper>
      <ImageOverlayContainer>
        <Image src={corousel[cSrc].images[2].url} alt="game 1" />
        <ImageOverlay />
      </ImageOverlayContainer>
      <SliderListContainer>
        {corousel.map((each, indx) => <SliderList key={each.id} className={`slider-${each.id} ${indx === 0 ? 'active' : ''}`} />)}
      </SliderListContainer>
    </SliderWrapper>
  );
};

export default Slider;
