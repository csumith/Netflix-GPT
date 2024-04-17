import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailersMoives: null,
  },
  reducers: {
    addplayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideos(state, action) {
      state.addTrailersMoives = action.payload;
    },
  },
});
export const { addplayingMovies, addTrailerVideos } = movieSlice.actions;
export default movieSlice.reducer;
