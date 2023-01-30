import axios from '../../lib/axios'

// const API_URL = 'http://localhost:5000/api/auth/'

// Register user
const register = async (userData) => {
  alert('register axios before')
  console.log('userData :>> ', userData);
  const response = await axios.post('/api/auth/register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  console.log('user data: ', userData)
  const response = await axios.post( '/api/auth/login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
  const response = axios.post('/api/auth/logout')
  return response.data
}

const authService = {
  register,
  logout,
  login,
}

export default authService
