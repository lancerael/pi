export const FORM_DEFAULTS = {
  signup: {
    state: {
      username: '',
      password: '',
      email: '',
    },
    title: 'Register a new user',
  },
  login: {
    state: { username: '', password: '' },
    title: 'Sign in',
  },
}

export const SUCCESS_MESSAGES = {
  signup: 'User created successfully ✔️',
  login: 'User login successful ✔️',
  validate: 'User access token successfully validated ✔️',
  refresh: 'User access token successfully updated ✔️',
  logout: 'User logout successful ✔️',
}

export const ENDPOINT_METHODS = {
  signup: 'POST',
  login: 'POST',
  validate: 'GET',
  refresh: 'GET',
  logout: 'DELETE',
}

export const API_URL = 'http://localhost:3000'
