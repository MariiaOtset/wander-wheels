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

const handleRejected = (state, { payload }) => {
  state.loading = false;
  if (payload?.status === 404) {
    state.notFound = true;
  } else {
    state.error = true;
  }
};

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
  state.notFound = false;
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetItems: (state) => {
      state.items = [];
      state.total = null;
      state.notFound = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = [...state.items, ...(payload.items ?? [])];
        state.total = payload.total ?? 0;
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
