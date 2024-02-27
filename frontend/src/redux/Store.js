import { combineReducers, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { TaskReducers } from "./reducers/TaskReducer";
import { configureStore } from "@reduxjs/toolkit";
import {tabReducer} from "./reducers/tabReducer";

// const reducer = combineReducers({
//     task:TaskReducers
// })

const middleware = [thunk];

const store = configureStore({
  reducer: {
    task: TaskReducers,
    currentTab: tabReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
//   composeWithDevTools(applyMiddleware(...middleware))
});
export default store;
