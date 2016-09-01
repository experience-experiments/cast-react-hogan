/**
 * Profile actions
 */
import { request } from '../../../actions'

/**
 * Action Types
 */
export const GET_PROFILE = 'GET_PROFILE'
export const PATCH_PROFILE = 'PATCH_PROFILE'

/**
 * Action Creators
 */
export function getProfile (id) {
  return {
    type: GET_PROFILE,
    promise: () => request.get(`/profiles/${id}/view-model`)
  }
}

export function patchProfile (id, profile) {
  return {
    type: PATCH_PROFILE,
    promise: () => request.patch(`/profiles/${id}`, profile)
  }
}
