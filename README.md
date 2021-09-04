## Redux skeleton with redux toolkit.

More about [redux toolkit](https://redux-toolkit.js.org/).

# serve at localhost:8000

    $ npm start

Includes 2 slices. (comments and post)

**comments.js:**

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

**posts.js:**

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

**reducer.js:**

    import { combineReducers } from 'redux'
    import postReducers from './posts'
    import commentReducers from './comments'

    export default combineReducers({
      posts: postReducers,
      comments: commentReducers,
    })

**configureStore.js:**

    import reducer from './reducer'
    import { configureStore } from '@reduxjs/toolkit'

    const store = configureStore({
      reducer,
    })

    export default store

**index.js:**

    import configureStore from './store/configureStore'
    import { fetchedPostFromApi, postAdded } from './store/posts'
    import { commentAdded } from './store/comments'

    const store = configureStore

**dispatch and get state:**

    // store.dispatch(postAdded({ description: 'Post-1' }))
    // store.dispatch(postAdded({ description: 'Post-2' }))

    store.dispatch(commentAdded({ description: 'Comment-1' }))
    store.dispatch(commentAdded({ description: 'Comment-2' }))

    console.log(store.getState())

    store.dispatch(fetchedPostFromApi()).then(() => {
      console.log(store.getState())
    })
