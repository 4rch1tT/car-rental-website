import { createSlice } from '@reduxjs/toolkit';

const loadWishlistFromStorage = () => {
  try {
    const savedWishlist = localStorage.getItem('rentr_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    console.error('Error loading wishlist from localStorage:', error);
    return [];
  }
};

const saveWishlistToStorage = (wishlist) => {
  try {
    localStorage.setItem('rentr_wishlist', JSON.stringify(wishlist));
  } catch (error) {
    console.error('Error saving wishlist to localStorage:', error);
  }
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: loadWishlistFromStorage(), 
  reducers: {
    toggleWishlist: (state, action) => {
      const carId = action.payload;
      const exists = state.includes(carId);
      let newState;
      
      if (exists) {
        newState = state.filter(id => id !== carId);
      } else {
        newState = [...state, carId];
      }
      saveWishlistToStorage(newState);
      return newState;
    },
    clearWishlist: (state) => {
      saveWishlistToStorage([]);
      return [];
    },
   
  }
});

export const { toggleWishlist, clearWishlist,} = wishlistSlice.actions;
export default wishlistSlice.reducer;

