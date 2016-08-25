/**
 * Constants and helper functions for the actions
 */
import axios from 'axios'

const API_PROTOCOL = 'http'
const API_HOST = 'localhost'
const API_PORT = '3001'
const API_BASEURL = 'api'
const API_VERSION = 'v1'

axios.defaults.baseURL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}/${API_BASEURL}/${API_VERSION}`

// Exposing `axios` to all the actions
export request from 'axios'
