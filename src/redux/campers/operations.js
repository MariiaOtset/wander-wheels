import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { removeNulls } from "../../utils/removeNulls.js";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (param, thunkAPI) => {
    const existingParams = removeNulls(param);
    const queryString = new URLSearchParams(existingParams);
    try {
      const response = await axios.get(`/campers?${queryString}&limit=5`);
      return response.data;
    } catch (error) {
      // MockAPI responds with HTTP 404 when a filtered collection has no matches.
      // An empty catalog is not a missing page or an application failure.
      if (error.response?.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue({
        status: error.response?.status ?? 0,
        message: error.message ?? "Failed to load campers",
      });
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchOneCamper",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response?.status ?? 0,
        message: error.message ?? "Failed to load camper",
      });
    }
  }
);
