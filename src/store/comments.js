import { createSlice } from '@reduxjs/toolkit'

let id = 0

const slice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    commentAdded: (state, action) => {
      state.push({
        description: action.payload.description,
        id: id++,
      })
    },
  },
})

export const { commentAdded } = slice.actions
export default slice.reducer
