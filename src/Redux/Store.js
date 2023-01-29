import { configureStore } from "@reduxjs/toolkit";
import { ContactSlice } from "./TodoSlice";

export default configureStore({
  reducer: {
    contacts: ContactSlice,
  },
});
