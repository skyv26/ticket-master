import React from 'react';
import PropTypes from 'prop-types';

const CategoryPage = (props) => {
  const { img } = props;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

CategoryPage.propTypes = {
  img: PropTypes.string,
};

CategoryPage.defaultProps = {
  img: 'https://d16kd6gzalkogb.cloudfront.net/__sized__/magazine_images/Banksy-Travolta-and-Samuel-L-Jackson-thumbnail_webp-9999x9999.webp',
};

export default CategoryPage;
