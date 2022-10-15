import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoryWrapper,
  CategoryImageWrapper,
  CirclularButton,
  CategoryLabel,
} from './Category.styled';
import { Image } from '../../globalStyles.styled';

const Category = (props) => {
  const { img } = props;
  return (
    <CategoryWrapper>
      <CategoryImageWrapper>
        <CirclularButton />
        <Image src={img} />
        <CategoryLabel>Sports</CategoryLabel>
      </CategoryImageWrapper>
    </CategoryWrapper>
  );
};

Category.propTypes = {
  img: PropTypes.string,
};

Category.defaultProps = {
  img: 'https://www.gstatic.com/webp/gallery/1.webp',
};

export default Category;
