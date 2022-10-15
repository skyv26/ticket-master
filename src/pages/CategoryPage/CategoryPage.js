import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
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
  const tickets = useSelector((state) => state.tickets);
  const { search } = useLocation();
  const navigate = useNavigate();
  const type = search.split('?')[1];
  const coursesPage = (id) => {
    navigate('/details', { state: { id }, search });
  };
  if (Object.keys(tickets).length === 0) {
    return <></>;
  }
  const data = tickets[type];
  const onSaleStat = data.filter((each) => each.dates.status.code === 'onsale');
  const offSaleStat = data.filter((each) => each.dates.status.code === 'offsale');
  const rescheduleStat = data.filter((each) => each.dates.status.code === 'rescheduled');

  return (
    <>
      <StatsWrapper>
        <StatsPara>
          Total Results
          <StatsSpan>{data.length}</StatsSpan>
        </StatsPara>
        <ChildWrapper>
          <ChildWrapperTwo>
            <StatsPara className="smallP">
              <StatsSpan className="smallS">{onSaleStat.length}</StatsSpan>
              onsale
            </StatsPara>
            <StatsPara className="smallP">
              <StatsSpan className="smallS">{offSaleStat.length}</StatsSpan>
              offsale
            </StatsPara>
          </ChildWrapperTwo>
          <StatsPara className="smallP">
            <StatsSpan className="smallS">{rescheduleStat.length}</StatsSpan>
            rescheduled
          </StatsPara>
        </ChildWrapper>
      </StatsWrapper>
      <ContextHeading>{`${type.toUpperCase()}`}</ContextHeading>
      <GridWrapper>
        {
          data.map((each) => (
            <Box key={each.id}>
              <CircularButton onClick={() => coursesPage(each.id)} />
              <Image
                src={each.images[2].url}
                alt={each.name}
              />
              <EventName>
                {each.name}
              </EventName>
            </Box>
          ))
        }
      </GridWrapper>
    </>
  );
};

export default CategoryPage;
