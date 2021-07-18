import { combineReducers } from 'redux'
import postReducers from './posts'
import commentReducers from './comments'

export default combineReducers({
  posts: postReducers,
  comments: commentReducers,
})
