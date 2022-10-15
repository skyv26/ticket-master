import styles from 'styled-components';
import { Wrapper } from '../../globalStyles.styled';

export const OverviewWrapper = styles(Wrapper)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1rem;
`;

export const OverviewPara = styles.p`
  font-family: 'Lato', sans-serif;
  font-size: 2.6rem;
  color: white;
  line-height: 1;
  font-weight: bold;
`;

export const OverviewSpan = styles.span`
  display: block;
  font-family: 'Encode Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const CategoriesWrapper = styles(Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 1.6rem 1rem;
`;
