import { configureStore } from "@reduxjs/toolkit";
import { campaignSlice } from "./campaignSlicer";

export const store = configureStore({
  reducer: campaignSlice.reducer,
});
