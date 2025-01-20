import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "../services/cryptoApi";

export default configureStore({
  reducer: {
    // Add the cryptoApi reducer
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the cryptoApi middleware
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
