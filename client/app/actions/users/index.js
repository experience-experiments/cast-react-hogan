/**
 * User actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_USERS = 'GET_USERS'

/**
 * Action Creators
 */
export function getUsers () {
  return {
    type: GET_USERS,
    promise: () => request.get(`/users`)
  }
}
