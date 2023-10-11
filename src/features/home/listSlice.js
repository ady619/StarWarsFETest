import { createSlice } from "@reduxjs/toolkit";
import { starshipsThunk } from "./listService";

const initialState = {
    data: [],
    status: 'idle',
    error: null,
  };

  const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(starshipsThunk.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(starshipsThunk.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
        })
        .addCase(starshipsThunk.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export default starshipsSlice.reducer;
  