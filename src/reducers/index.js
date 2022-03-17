import { combineReducers } from 'redux'

import todos from './todos'
import status from './status'
import posts from './posts'
import intro from './intro'

export default combineReducers({
  posts,
  todos,
  intro,
  status
  
})