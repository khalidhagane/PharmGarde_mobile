import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth/'

// Register user
const register = async (userData) => {
  alert('register axios before')
  console.log('userData :>> ', userData);
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  console.log('user data: ', userData)
  const response = await axios.post(API_URL + 'login', userData)
  // console.log('response data: ', response)
  // alert('login axios before')

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
  const response = axios.post(API_URL + 'logout')
  return response.data
}

const authService = {
  register,
  logout,
  login,
}

export default authService
