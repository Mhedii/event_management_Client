import { createSlice } from "@reduxjs/toolkit";

interface IService {
  title: string;
  author: string;
  genre: string;
  publicaitonYear: number;
  publicaitonDate: string;
  reviews: number;
  isMarked: boolean;
  searchTerm: string;
  wishlist: object;
  readingList: object[];
  finishedList: object[];
}
const initialState = {
  //   title: "",
  //   author: "",
  //   genre: "",
  //   publicaitonYear: 2000,
  //   publicaitonDate: "",
  //   reviews: 5,
  //   isMarked: false,
  //   searchTerm: "",
  //   wishlist: [],
  //   readingList: [],
  //   finishedList: [],
};
const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    service: (state, action) => {
      console.log(state, action);
      state = action.payload;
    },
  },
});

export const { service } = serviceSlice.actions;
export default serviceSlice.reducer;
