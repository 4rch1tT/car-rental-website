import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    wishlist: wishlistReducer,
    theme: themeReducer,
  },
});
