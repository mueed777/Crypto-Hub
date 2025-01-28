import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
  "x-rapidapi-key": "b969ed1e7cmsh2ab5a8f402972d2p18babajsnb5811f33e42a",
  "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest("/v1/cryptodaily"),
    }),
  }),
});

export default cryptoNewsApi;

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
