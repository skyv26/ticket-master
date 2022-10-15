import React from 'react';
import { useParams } from 'react-router';
import { ContextHeading, Image } from '../../globalStyles.styled';
import {
  StatsWrapper,
  StatsPara,
  StatsSpan,
  ChildWrapper,
  ChildWrapperTwo,
  GridWrapper,
  Box,
  CircularButton,
  EventName,
} from './CategoryPage.styled';

const CategoryPage = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      <StatsWrapper>
        <StatsPara>
          Total Results
          <StatsSpan>100</StatsSpan>
        </StatsPara>
        <ChildWrapper>
          <ChildWrapperTwo>
            <StatsPara className="smallP">
              <StatsSpan className="smallS">96</StatsSpan>
              onsale
            </StatsPara>
            <StatsPara className="smallP">
              <StatsSpan className="smallS">3</StatsSpan>
              offsale
            </StatsPara>
          </ChildWrapperTwo>
          <StatsPara className="smallP">
            <StatsSpan className="smallS">1</StatsSpan>
            rescheduled
          </StatsPara>
        </ChildWrapper>
      </StatsWrapper>
      <ContextHeading>{`${type.toUpperCase()}`}</ContextHeading>
      <GridWrapper>
        <Box>
          <CircularButton />
          <Image src="https://d16kd6gzalkogb.cloudfront.net/__sized__/magazine_images/Banksy-Travolta-and-Samuel-L-Jackson-thumbnail_webp-9999x9999.webp" alt="" />
          <EventName>Approve</EventName>
        </Box>
      </GridWrapper>
    </>
  );
};

export default CategoryPage;
