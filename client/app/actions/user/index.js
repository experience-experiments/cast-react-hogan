/**
 * User actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_USER = 'GET_USER'

/**
 * Action Creators
 */
export function getUser (id) {
  return {
    type: GET_USER,
    promise: () => request.get(`/users/${id}`)
  }
}
