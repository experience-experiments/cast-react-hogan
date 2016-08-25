import { GET_PROFILE } from '../../actions/profile'

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
        ...action.r.data
      }
    default:
      return state
  }
}
