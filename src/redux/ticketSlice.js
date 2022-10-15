/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const TicketAPI = 'https://app.ticketmaster.com/discovery/v2/events.json?&apikey=VwRqkplVGaYm4ZuUaAV3sa4LSGGl5eYa&size=25';
const TicketType = '/get/ticket';

const initialState = {};

const COROUSEL_LIMIT = 4;

// const CATEGORIES = {};

const COROUSEL_ARRAY = [];

const getRandomArbitrary = () => Math.random() * (100 - 0) + 0;

for (let iter = 0; iter < COROUSEL_LIMIT; iter += 1) {
  COROUSEL_ARRAY.push(Number(getRandomArbitrary().toFixed(0)));
}

export const TicketThunk = createAsyncThunk(TicketType, async () => {
  const sport = await (await fetch(`${TicketAPI}&classificationName=sports`)).json();
  const music = await (await fetch(`${TicketAPI}&classificationName=music`)).json();
  const art = await (await fetch(`${TicketAPI}&classificationName=art`)).json();
  const misc = await (await fetch(`${TicketAPI}&classificationName=miscellaneous`)).json();
  return {
    sport, music, art, misc,
  };
});

const TicketSlice = createSlice({
  name: 'Ticket',
  initialState,
  reducers: {},
  extraReducers: {
    [TicketThunk.fulfilled]: (state, action) => {
      const { payload } = action;
      const newState = {
        page: {
          size: payload.music.page.size
          + payload.art.page.size
          + payload.misc.page.size
          + payload.sport.page.size,
          totalElements: payload.music.page.totalElements
          + payload.art.page.totalElements
          + payload.misc.page.totalElements
          + payload.sport.page.totalElements,
          totalPages: payload.music.page.totalPages
          + payload.art.page.totalPages
          + payload.misc.page.totalPages
          + payload.sport.page.totalPages,
          categories: 4,
        },
        events: [
          ...payload.music._embedded.events,
          ...payload.art._embedded.events,
          ...payload.misc._embedded.events,
          ...payload.sport._embedded.events,
        ],
      };
      const corousel = COROUSEL_ARRAY.map((each) => newState.events[each]);
      const categoryImages = [
        {
          id: nanoid(),
          category: 'Sports',
          img: 'https://www.durham.ac.uk/media/durham-university/departments-/sport-and-exercise-sciences/sport/86125-2000x1333.jpg',
        },
        {
          id: nanoid(),
          category: 'Music',
          img: 'https://static.india.com/wp-content/uploads/2022/08/Collage-Maker-19-Aug-2022-03.17-PM-1.jpg',
        },
        {
          id: nanoid(),
          category: 'Miscellenous',
          img: 'https://russianvagabond.com/wp-content/uploads/2022/05/Webp.net-resizeimage-6-1024x681.jpg',
        },
        {
          id: nanoid(),
          category: 'Art',
          img: 'https://d16kd6gzalkogb.cloudfront.net/__sized__/magazine_images/Banksy-Travolta-and-Samuel-L-Jackson-thumbnail_webp-9999x9999.webp',
        },
      ];
      return {
        ...newState, corousel, categoryImages,
      };
    },
  },
});

export default TicketSlice.reducer;
