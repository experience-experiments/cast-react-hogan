/**
 * User actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_PROFILE = 'GET_USER'
export const PATCH_PROFILE = 'PATCH_PROFILE'

/**
 * Action Creators
 */
export function getProfile (id) {
  return {
    type: GET_PROFILE,
    promise: () => request.get(`/users/${id}`)
  }
}

export function patchProfile (id, values) {
  return {
    type: PATCH_PROFILE,
    promise: () => request.patch(`/users/${id}`, values)
  }
}
