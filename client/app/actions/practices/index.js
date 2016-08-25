/**
 * Practices actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_PRACTICES = 'GET_PRACTICES'

/**
 * Action Creators
 */
export function getPractices () {
  return {
    type: GET_PRACTICES,
    promise: () => request.get(`/practices`)
  }
}
