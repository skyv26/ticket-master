import React from 'react';
import Slider from '../../components/Slider/Slider';
import { ContextHeading } from '../../globalStyles.styled';
import {
  OverviewWrapper,
  OverviewPara,
  OverviewSpan,
  CategoriesWrapper,
} from './Home.styled';
import Category from '../../components/Category/Category';

const Home = () => (
  <>
    <Slider />
    <ContextHeading>Overview</ContextHeading>
    <OverviewWrapper>
      <OverviewPara>
        {
          Number(9223).toLocaleString()
        }
        <OverviewSpan>pages</OverviewSpan>
      </OverviewPara>

      <OverviewPara>
        {
          Number(18448).toLocaleString()
        }
        <OverviewSpan>events</OverviewSpan>
      </OverviewPara>

      <OverviewPara>
        {
          Number(4).toLocaleString()
        }
        <OverviewSpan>categories</OverviewSpan>
      </OverviewPara>
    </OverviewWrapper>
    <ContextHeading>Ticket Categories</ContextHeading>
    <CategoriesWrapper>
      <Category />
      <Category />
      <Category />
      <Category />
    </CategoriesWrapper>
  </>
);

export default Home;
