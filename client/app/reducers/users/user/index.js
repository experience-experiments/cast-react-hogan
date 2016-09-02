import { GET_USER } from '../../../actions/users/user'

/**
 * User Reducer
 *
 * @param {Object} state Initial state
 * @param {Object} action
 */
export default function userReducer (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return { ...action.r.data }
    default:
      return state
  }
}
