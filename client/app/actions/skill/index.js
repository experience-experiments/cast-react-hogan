/**
 * Skill actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_SKILL = 'GET_SKILL'

/**
 * Action Creators
 */
export function getSkill (id) {
  return {
    type: GET_SKILL,
    promise: () => request.get(`/skills/${id}`)
  }
}
