/**
 * Constants and helper functions for the actions
 */
import axios from 'axios'

// const API_URL = ''
// const API_VERSION = 'v1'

// axios.defaults.baseURL = `${global.__AXIOS_BASE_URL__}/${API_VERSION}`

axios.defaults.baseURL = '/api'

// Exposing `axios` to all the actions
export request from 'axios'
