import { GET_PROFILE, PATCH_PROFILE } from '../../../actions/profiles/profile'

/**
 * Profile Reducer
 *
 * @param {Object} state Initial state
 * @param {Object} action
 */
export default function profileReducer (state = {}, action) {
  switch (action.type) {
    case GET_PROFILE:
      return { ...action.r.data }
    case PATCH_PROFILE:
      return { ...action.r.data }
    default:
      return state
  }
}
