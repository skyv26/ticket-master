import styles from 'styled-components';
import { Wrapper } from '../../globalStyles.styled';
import { CirclularButton, CategoryLabel } from '../../components/Category/Category.styled';

export const StatsWrapper = styles(Wrapper)`
  flex-direction: row;
  background-color: #744499;
  gap: 0.25rem;
`;

export const StatsPara = styles.p`
  display: flex;
  flex-direction: column;
  aign-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  padding: 1.25rem 1.4rem;
  font-size: 2.25rem;
  font-weight: 400;
  text-align: center;
  background-color: #8021CB;

  &.smallP {
    font-size: 2rem;
  }
`;

export const StatsSpan = styles.span`
  font-size: 2.6rem;
  font-weight: bold;
  display: block;

  &.smallS {
    font-size: 2rem;
  }
  
`;

export const ChildWrapper = styles(Wrapper)`
  gap: 0.25rem;
`;

export const ChildWrapperTwo = styles(Wrapper)`
  flex-direction: row;
  gap: 0.25rem;
`;

export const GridWrapper = styles.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 0.6rem 1rem;
  grid-gap: 0.6rem;
`;

export const Box = styles.div`
  width: 100%;
  height: 15rem;
  background-color: rgba(116, 68, 153, 0.25);
  position: relative;
  
  & img {
    position: absolute;
    z-index: -1;
  }
`;

export const CircularButton = styles(CirclularButton)`
  color: white;
  top: 5%;
  right: 5%;
  font-size: 2.25rem;
`;

export const EventName = styles(CategoryLabel)`
  border-radius: unset;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  background-color: rgba(116, 68, 153, 0.95);
`;
