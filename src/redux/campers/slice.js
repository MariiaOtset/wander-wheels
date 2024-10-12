import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations.js";

const initialState = {
  items: [],
  camperById: null,
  loading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload.items;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.camperById = payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
