import { GET_USERS } from '../../actions/users'

/**
 * User Reducer
 *
 * @param {Object} state  Initial state
 * @param {Object} action
 */
export default function usersReducer (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.r.data
    default:
      return state
  }
}
