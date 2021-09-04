import configureStore from './store/configureStore'
import { fetchedPostFromApi, postAdded } from './store/posts'
import { commentAdded } from './store/comments'

const store = configureStore

// store.dispatch(postAdded({ description: 'Post-1' }))
// store.dispatch(postAdded({ description: 'Post-2' }))

store.dispatch(commentAdded({ description: 'Comment-1' }))
store.dispatch(commentAdded({ description: 'Comment-2' }))

console.log(store.getState())

store.dispatch(fetchedPostFromApi()).then(() => {
  console.log(store.getState())
})
