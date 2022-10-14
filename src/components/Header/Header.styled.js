import styles from 'styled-components';
import { HiMenuAlt1, HiMicrophone, HiChevronLeft } from 'react-icons/hi';
import { Wrapper } from '../../globalStyles.styled';

export const AppHeader = styles.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 0.25rem;
  background-color: #744499;
  color: white;
`;

export const HeaderWrapper = styles(Wrapper)`
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const BackButton = styles(HiChevronLeft)`
  font-size: 3rem;
  width: max-content;
`;

export const Microphone = styles(HiMicrophone)`
  font-size: 2rem;
`;

export const MenuBurger = styles(HiMenuAlt1)`
  font-size: 4.25rem;
  padding: 0 0.75rem;
`;
