import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchKeyword: "",
  startDate: "",
  endDate: "",
  status: "idle",
  error: null,
  userData: [],
  campaignData: [],
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    startDateSet: (state, action) => {
      state.startDate = action.payload;
    },
    endDateSet: (state, action) => {
      state.endDate = action.payload;
    },
    searchKeywordSet: (state, action) => {
      state.searchKeyword = action.payload;
    },
    campaignDataAdded: (state, action) => {
      state.campaignData = state.campaignData.concat(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userData = state.userData.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchUsers = createAsyncThunk("campaign/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
});
