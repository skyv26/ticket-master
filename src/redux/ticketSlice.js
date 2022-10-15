import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const TicketAPI = 'https://app.ticketmaster.com/discovery/v2/events.json?&apikey=VwRqkplVGaYm4ZuUaAV3sa4LSGGl5eYa&size=100';
const TicketType = '/get/ticket';

const initialState = {};

const COROUSEL_LIMIT = 3;

const COROUSEL_ARRAY = [];

const getRandomArbitrary = () => Math.random() * (100 - 0) + 0;

for (let iter = 0; iter < COROUSEL_LIMIT; iter += 1) {
  COROUSEL_ARRAY.push(Number(getRandomArbitrary().toFixed(0)));
}

export const TicketThunk = createAsyncThunk(TicketType, async () => {
  const data = await (await fetch(TicketAPI)).json();
  return data;
});

const TicketSlice = createSlice({
  name: 'Ticket',
  initialState,
  reducers: {},
  extraReducers: {
    [TicketThunk.fulfilled]: (state, action) => {
      const { payload } = action;
      // eslint-disable-next-line no-underscore-dangle
      const { events } = payload._embedded;
      // eslint-disable-next-line no-underscore-dangle
      const links = payload._links;
      return {
        page: payload.page,
        events,
        links,
        corousel: COROUSEL_ARRAY.map((each) => events[each]),
      };
    },
  },
});

export default TicketSlice.reducer;
