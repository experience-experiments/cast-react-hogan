import { GET_PROFILES } from '../../actions/profiles'

/**
 * Profile Reducer
 *
 * @param {Object} state Initial state
 * @param {Object} action
 */
export default function profilesReducer (state = [], action) {
  switch (action.type) {
    case GET_PROFILES:
      return action.r.data.slice()
    default:
      return state
  }
}
