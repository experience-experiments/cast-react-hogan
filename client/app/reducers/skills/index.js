import { GET_SKILLS } from '../../actions/skills'

/**
 * Skill Reducer
 *
 * @param {Object} state  Initial state
 * @param {Object} action
 */
export default function skillsReducer (state = [], action) {
  switch (action.type) {
    case GET_SKILLS:
      return action.r.data
    default:
      return state
  }
}
