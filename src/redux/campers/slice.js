import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations.js";

const initialState = {
  items: [],
  camperById: null,
  loading: false,
  error: null,
  total: null,
  notFound: false,
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
  reducers: {
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload.items;
        state.total = payload.total;
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
export const { resetItems } = campersSlice.actions;
