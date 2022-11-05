import { createSlice } from '@reduxjs/toolkit';

const NFTslice = createSlice({
  name: 'NFTcards',
  initialState: {
    NFTcard: [],
  },
  reducers: {
    NFTcards(state, action) {
      state.NFTcard = action.payload;
    },
  },
});

export const { NFTcards } = NFTslice.actions;

export default NFTslice.reducer;
