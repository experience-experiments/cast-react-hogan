import { GET_PROFILE, PATCH_PROFILE } from '../../actions/profile-editor'

/**
 * Profile Reducer
 *
 * @param {Object} state  Initial state
 * @param {Object} action
 */
export default function profileReducer (state = {}, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...action.res.data.data
      }
    case PATCH_PROFILE: // beep beep
      return {
        ...action.res.data.data
      }
    default:
      return state
  }
}
