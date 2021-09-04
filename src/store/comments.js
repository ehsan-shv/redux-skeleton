import { createSlice } from '@reduxjs/toolkit'

let id = 0

const slice = createSlice({
  name: 'comments',
  initialState: {
    items: [],
  },
  reducers: {
    commentAdded: (state, action) => {
      state.items.push({
        description: action.payload.description,
        id: id++,
      })
    },
  },
})

export const { commentAdded } = slice.actions
export default slice.reducer
