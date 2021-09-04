import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const ENDPOINT = 'https://conduit.productionready.io/api/articles'
let id = 0

export const fetchedPostFromApi = createAsyncThunk(
  'fetchedPostFromApi',
  async () => {
    const response = await fetch(
      'https://conduit.productionready.io/api/articles'
    ).then((response) => response.json())
    return response.articles
  }
)

const slice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
  },
  reducers: {
    //   postAdded: (state, action) => {
    //     state.items.push({
    //       description: action.payload.description,
    //       id: id++,
    //     })
    //   },
  },
  extraReducers: {
    [fetchedPostFromApi.fulfilled]: (state, action) => {
      state.items = action.payload
    },
  },
})

// export const { postAdded } = slice.actions
export default slice.reducer
