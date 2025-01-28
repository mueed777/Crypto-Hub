import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "../services/cryptoApi";
import cryptoNewsApi from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    // Add the cryptoApi reducer
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the cryptoApi middleware
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware),
});
