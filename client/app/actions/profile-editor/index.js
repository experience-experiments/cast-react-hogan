/**
 * User actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_PROFILE_EDITOR = 'GET_PROFILE_EDITOR'
export const PATCH_PROFILE_EDITOR = 'PATCH_PROFILE_EDITOR'

/**
 * Action Creators
 */
export function getProfile (id) {
  return {
    type: GET_PROFILE_EDITOR,
    promise: request.get(`/profiles/${id}`)
  }
}

export function patchProfile (id, values) {
  return {
    type: PATCH_PROFILE_EDITOR,
    promise: request.patch(`/profiles/${id}`, values)
  }
}
