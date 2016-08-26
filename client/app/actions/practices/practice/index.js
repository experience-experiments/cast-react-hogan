/**
 * Practice actions
 */
import { request } from '../../../actions'

/**
 * Action Types
 */
export const GET_PRACTICE = 'GET_PRACTICE'

/**
 * Action Creators
 */
export function getPractice (id) {
  return {
    type: GET_PRACTICE,
    promise: () => request.get(`/practices/${id}`)
  }
}
