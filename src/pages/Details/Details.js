/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Image, ContextHeading } from '../../globalStyles.styled';
import { ImageWrapper, ContextPara } from './Details.styled';

const Details = () => {
  const tickets = useSelector((state) => state.tickets);
  const location = useLocation();
  if (Object.keys(tickets).length === 0) {
    return <></>;
  }
  const { id } = location.state;
  const getObj = tickets.events.filter((each) => each.id === id);
  const eventName = getObj[0].name;
  const stadiumName = getObj[0]._embedded.venues[0].name;
  const Seatmap = getObj[0].seatmap.staticUrl;
  return (
    <>
      <ImageWrapper>
        <Image src={getObj[0].images[2].url} alt={getObj.name} />
      </ImageWrapper>
      <ContextHeading>Event Name</ContextHeading>
      <ContextPara>{eventName}</ContextPara>
      <ContextHeading>Venue Name</ContextHeading>
      <ContextPara>{stadiumName}</ContextPara>
      <ContextHeading>Seatmap</ContextHeading>
      <Image src={Seatmap} alt="" />
      <ContextHeading />
      <ContextHeading />
    </>
  );
};

export default Details;
