import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  CategoryWrapper,
  CategoryImageWrapper,
  CircularButtonWrapper,
  CirclularButton,
  CategoryLabel,
} from './Category.styled';
import { Image } from '../../globalStyles.styled';

const Category = (props) => {
  const navigate = useNavigate();
  const coursesPage = (type) => {
    navigate({
      pathname: '/category',
      search: `${type}`,
    });
  };
  const { img, label } = props;
  return (
    <CategoryWrapper>
      <CategoryImageWrapper>
        <CircularButtonWrapper onClick={() => coursesPage(label.toLowerCase())}>
          <CirclularButton />
        </CircularButtonWrapper>
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
