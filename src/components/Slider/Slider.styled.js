import styled from 'styled-components';
import { Wrapper, UnorderedList, List } from '../../globalStyles.styled';

export const SliderWrapper = styled(Wrapper)`
  display: flex;
  position: relative;
`;

export const ImageOverlayContainer = styled(Wrapper)`
  position: relative;
  height: 22.5rem;
`;

export const ImageOverlay = styled(Wrapper)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SliderWrapper2 = styled(Wrapper)`
`;

export const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: top;
`;

export const SliderListContainer = styled(UnorderedList)`
  display: flex;
  list-style: none;
  gap: 1rem;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, -5%)
`;

export const SliderList = styled(List)`
  width: 0.6rem;
  height: 0.6rem;
  background-color: white;

  &.active {
    transform: scale(1.5);
  }
`;
