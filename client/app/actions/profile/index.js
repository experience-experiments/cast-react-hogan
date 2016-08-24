/**
 * User actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_PROFILE = 'GET_PROFILE'

/**
 * Action Creators
 */
export function getProfile (id) {
  return {
    type: GET_PROFILE,
    promise: request.get(`/profiles/${id}`)
  }
}
