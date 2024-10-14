import { createSlice } from "@reduxjs/toolkit";
import { getAllCampers } from "./operation.js";
import { getCamperById } from "./operation.js";


const handlePending = state => {
    state.isError = false;
    state.notFound = false;
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  if (payload.status === 404) {
    state.notFound = true;
    state.isLoading = false;
  } else {
    state.isError = true;
    state.isLoading = false;
  }
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectedItem: null,
    total: null,
    isLoading: false,
    isError: null,
    notFound: false,
  },
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCampers.pending, handlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = [...state.items,...action.payload.items];
        state.total = action.payload.total;
      })
      .addCase(getAllCampers.rejected, handleRejected)
      .addCase(getCamperById.pending, handlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.selectedItem = action.payload;
      })
      .addCase(getCamperById.rejected, handleRejected)
});

export const campersReducer = campersSlice.reducer;
export const { resetItems } = campersSlice.actions;