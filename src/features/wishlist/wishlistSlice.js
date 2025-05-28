import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    toggleWishlist: (state, action) => {
      const carId = action.payload;
      const exists = state.includes(carId);
      if (exists) {
        return state.filter(id => id !== carId);
      } else {
        state.push(carId);
      }
    },
    clearWishlist: () => []
  }
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

