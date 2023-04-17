import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      // adding signUp page here
      addData: (state, action) => {
        // console.log(action.payload, "action.payload")
        const newData = action.payload
        console.log(newData, "newdata")
        state.push(newData)
        console.log(JSON.parse(JSON.stringify(state)), "after state")
        return state;
      }
    }
  })
export const { addData } = counterSlice.actions;
export default counterSlice.reducer;