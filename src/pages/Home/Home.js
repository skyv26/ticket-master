import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { FaSearch } from 'react-icons/fa';
import Slider from '../../components/Slider/Slider';
import { ContextHeading } from '../../globalStyles.styled';
import {
  OverviewWrapper,
  OverviewPara,
  OverviewSpan,
  CategoriesWrapper,
  Form,
  TextField,
  FormButton,
} from './Home.styled';
import Category from '../../components/Category/Category';

const Home = () => {
  const tickets = useSelector((state) => state.tickets);
  const textRef = useRef();
  if (Object.keys(tickets).length === 0) {
    return <></>;
  }
  const { page, categoryImages } = tickets;
  const altText = [
    {
      id: nanoid(),
      type: 'pages',
      value: page.totalPages,
    },
    {
      id: nanoid(),
      type: 'events',
      value: page.totalElements,
    },
    {
      id: nanoid(),
      type: 'categories',
      value: page.categories,
    },
  ];

  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Slider />
      <ContextHeading>Overview</ContextHeading>
      <OverviewWrapper>
        {
          altText.map((each) => (
            <OverviewPara key={each.id}>
              {
                Number(each.value).toLocaleString()
              }
              <OverviewSpan>{each.type}</OverviewSpan>
            </OverviewPara>
          ))
        }
      </OverviewWrapper>
      <Form onSubmit={(e) => searchHandler(e)}>
        <TextField ref={textRef} type="text" name="" id="" />
        <FormButton type="submit">
          <FaSearch />
        </FormButton>
      </Form>
      <ContextHeading>Ticket Categories</ContextHeading>
      <CategoriesWrapper>
        {categoryImages.map((each) => (
          <Category
            key={each.id}
            img={each.img}
            label={each.category}
          />
        ))}
      </CategoriesWrapper>
    </>
  );
};

export default Home;
