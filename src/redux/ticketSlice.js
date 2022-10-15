/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
        },
        events: [
          ...payload.music._embedded.events,
          ...payload.art._embedded.events,
          ...payload.misc._embedded.events,
          ...payload.sport._embedded.events,
        ],
      };
      const corousel = COROUSEL_ARRAY.map((each) => newState.events[each]);
      return {
        newState, corousel,
      };
    },
  },
});

export default TicketSlice.reducer;
