/**
 * User actions
 */
import { request } from '../../actions'

/**
 * Action Types
 */
export const GET_PROFILES = 'GET_PROFILES'

/**
 * Action Creators
 */
export function getProfiles () {
  return {
    type: GET_PROFILES,
    promise: request.get(`/profiles`)
  }
}
