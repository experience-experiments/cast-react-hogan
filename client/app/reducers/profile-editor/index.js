import { GET_PROFILE_EDITOR, PATCH_PROFILE_EDITOR } from '../../actions/profile-editor'

/**
 * Profile Reducer
 *
 * @param {Object} state  Initial state
 * @param {Object} action
 */
export default function profileEditorReducer (state = {}, action) {
  switch (action.type) {
    case GET_PROFILE_EDITOR:
      return {
        ...action.r.data
      }
    case PATCH_PROFILE_EDITOR: // beep beep
      return {
        ...action.r.data
      }
    default:
      return state
  }
}
