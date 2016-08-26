/**
 * Skills actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_SKILLS = 'GET_SKILLS'

/**
 * Action Creators
 */
export function getSkills () {
  return {
    type: GET_SKILLS,
    promise: () => request.get(`/skills/view-model`)
  }
}
