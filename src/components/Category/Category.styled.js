import styles from 'styled-components';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Wrapper, ImageOverlay } from '../../globalStyles.styled';

export const CategoryWrapper = styles(Wrapper)`
`;

export const CategoryImageWrapper = styles(Wrapper)`
  position: relative;
  border-radius: 1rem;
  border: 2px solid #744499;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;

  & img {
    z-index: -1;
  }
`;

export const Overlay = styles(ImageOverlay)`
`;

export const CirclularButton = styles(FaArrowCircleRight)`
  position: absolute;
  right: 2%;
  top: 2%;
  font-size: 1.6rem;
  color: #401a4c;
`;

export const CategoryLabel = styles.p`
  position: absolute;
  color: white;
  left: 0;
  bottom: 0;
  background-color: #744499;
  border-top-right-radius: 1rem;
  padding: 0.4rem 1.6rem;
`;
