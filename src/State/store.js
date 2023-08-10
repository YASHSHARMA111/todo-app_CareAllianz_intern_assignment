import { configureStore } from "@reduxjs/toolkit";
import tasks from "./slice/taskSlice";
export const store = configureStore({
  reducer: {
    tasks
  }
});
