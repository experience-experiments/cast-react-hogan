import { combineReducers } from 'redux'
import profileEditor from './profile-editor'
import profiles from './profiles'
import profile from './profile'
import practices from './practices'
import practice from './practice'
import skills from './skills'
import skill from './skill'
import users from './users'
import user from './user'

const reducers = combineReducers({
  profileEditor,
  profiles,
  profile,
  practices,
  practice,
  skills,
  skill,
  users,
  user
})

export default reducers
