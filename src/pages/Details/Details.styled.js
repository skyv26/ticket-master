import styles from 'styled-components';
import { Wrapper, ContextHeading } from '../../globalStyles.styled';

export const ImageWrapper = styles(Wrapper)`
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const ContextPara = styles(ContextHeading)`
  background-color: rgba(116, 68, 153, 0.6);
  padding: 2rem 1rem;
  vertical-align: middle;
  font-size: 1.5rem;
`;
