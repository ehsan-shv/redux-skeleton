import { createSlice } from '@reduxjs/toolkit'

let id = 0

const slice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    postAdded: (state, action) => {
      state.push({
        description: action.payload.description,
        id: id++,
      })
    },
  },
})

export const { postAdded } = slice.actions
export default slice.reducer
