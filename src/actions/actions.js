import { createAsyncThunk } from "@reduxjs/toolkit";
import { DECREMENT, HOMEPAGE_NEXT, HOMEPAGE_PREVIOUS, INCREMENT, UPDATE_VEHICLE_LIST } from "./actionTypes";

export const increment = () => ({
    type: INCREMENT,
  });
  
  export const decrement = () => ({
    type: DECREMENT,
  });

  export const homePageNext = () => ({
    type: HOMEPAGE_NEXT,
  });

  export const homePagePrevious = () => ({
    type: HOMEPAGE_PREVIOUS,
  });

  export const fetchList = createAsyncThunk('list/fetchList', async () => {
    try {
      const response = await fetch('https://swapi.dev/api/starships');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });

  export const updateVehicleList = () => ({
    type: UPDATE_VEHICLE_LIST
  })
  