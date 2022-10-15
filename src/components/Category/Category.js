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
  const { img, label } = props;
  return (
    <CategoryWrapper>
      <CategoryImageWrapper>
        <CirclularButton />
        <Image src={img} />
        <CategoryLabel>{label}</CategoryLabel>
      </CategoryImageWrapper>
    </CategoryWrapper>
  );
};

Category.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string,
};

Category.defaultProps = {
  img: 'https://www.gstatic.com/webp/gallery/1.webp',
  label: 'Sports',
};

export default Category;
