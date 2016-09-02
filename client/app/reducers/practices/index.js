import { GET_PRACTICES } from '../../actions/practices'

/**
 * Practice Reducer
 *
 * @param {Object} state Initial state
 * @param {Object} action
 */
export default function practicesReducer (state = [], action) {
  switch (action.type) {
    case GET_PRACTICES:
      return action.r.data.slice()
    default:
      return state
  }
}
