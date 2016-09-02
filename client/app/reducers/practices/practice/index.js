import { GET_PRACTICE } from '../../../actions/practices/practice'

/**
 * Profile Reducer
 *
 * @param {Object} state Initial state
 * @param {Object} action
 */
export default function practiceReducer (state = {}, action) {
  switch (action.type) {
    case GET_PRACTICE:
      return { ...action.r.data }
    default:
      return state
  }
}
