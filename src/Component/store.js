import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./Slice/signUpSlice";

const reducer = {
  addingData: counterSlice,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;