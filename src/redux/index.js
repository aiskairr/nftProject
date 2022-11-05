import { configureStore } from '@reduxjs/toolkit';
import NFTslices from './todoSlices/NFTslices';

export const store = configureStore({
  reducer: {
    nft: NFTslices
 }
});

