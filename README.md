## Redux skeleton with reduxt toolkit.

More about [reduxt toolkit](https://redux-toolkit.js.org/).

    # serve at localhost:8000
    $ npm start

Includes 2 slices. (comments and post)

**comments.js:**

    import { createSlice } from  '@reduxjs/toolkit'

    let id =  0

    const  slice  =  createSlice({
    name:  'comments',
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

    export  const { commentAdded } = slice.actions
    export  default slice.reducer

**posts.js:**

    import { createSlice } from  '@reduxjs/toolkit'

    let id =  0

    const  slice  =  createSlice({
    name:  'posts',
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

    export  const { postAdded } = slice.actions
    export  default slice.reducer

**reducer.js:**

    import { combineReducers } from  'redux'
    import  postReducers  from  './posts'
    import  commentReducers  from  './comments'

    export  default  combineReducers({
    posts:  postReducers,
    comments:  commentReducers,
    })

**configureStore.js:**

    import  reducer  from  './reducer'
    import { configureStore } from  '@reduxjs/toolkit'

    export  default  function () {
    return  configureStore({
    reducer,
    })
    }

**index.js:**

    import  configureStore  from  './store/configureStore'
    import { postAdded } from  './store/posts'
    import { commentAdded } from  './store/comments'

    const  store  =  configureStore()

**dispatch state:**

    store.dispatch(postAdded({ description:  'Post-1' }))
    store.dispatch(commentAdded({ description:  'Comment-1' }))
