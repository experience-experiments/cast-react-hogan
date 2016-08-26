import { GET_SKILL } from '../../../actions/skills/skill'

/**
 * Skill Reducer
 *
 * @param {Object} state  Initial state
 * @param {Object} action
 */
export default function skillReducer (state = {}, action) {
  switch (action.type) {
    case GET_SKILL:
      return action.r.data
    default:
      return state
  }
}
