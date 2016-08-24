import { combineReducers } from 'redux'
import profileEditor from './profile-editor'
import profiles from './profiles'
import profile from './profile'

const reducers = combineReducers({
  profileEditor,
  profiles,
  profile
})

export default reducers
