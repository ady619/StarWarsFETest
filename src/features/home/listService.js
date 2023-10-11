import { createAsyncThunk } from "@reduxjs/toolkit";


export const starshipsThunk = createAsyncThunk('home/starshipsThunk', async () => {
    try {
      const response = await fetch("https://swapi.dev/api/starships/");
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });