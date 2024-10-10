import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operation.js";
import { getCamperById } from "./operation.js";


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    chosenItem: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.chosenItem = action.payload;
      })
      .addCase(getCamperById.rejected, handleRejected)
});

export const campersReducer = campersSlice.reducer;
