import { GET_PROFILES } from '../../actions/profile-editor'

/**
 * Profile Reducer
 *
 * @param {Object} state  Initial state
 * @param {Object} action
 */
export default function profilesReducer (state = {}, action) {
  console.log(action.type)
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...action.res.data.data
      }
    default:
      return state
  }
}
