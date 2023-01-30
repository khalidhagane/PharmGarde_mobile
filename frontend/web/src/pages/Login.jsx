import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import GoogleButton from 'react-google-button'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);
  const { isLoading, isError, isSuccess, message, user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (isError) {
      setError(message)
      toast.error(message)
    }
    if (isSuccess || user) {
      setError(null)
      toast.success(message)
      navigate('/Home')
    }
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .max(30, 'email should be of maximum 30 characters length')
      .min(10, 'email should be of minimum 10 characters length')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .max(20, 'Password should be of maximum 20 characters length')
      .required('Password is required'),

  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(login(values))
    }

  });
  if (isLoading) {
    return (
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.5)',

    }}>
      <CircularProgress
        color="primary"
        size={75}
       />
    </Box>
    )

  }

  return (
    <>
    <div className="bg-[#AEE2FF]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bottom">
          <h1 className="text-center text-5xl m-5 font-bold text-back sm:text-3xl text-[#567189] ">
            Welcome Admin
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-[#567189]">
            Application de syndicat pour gérer les paiement pour chaque appartement
          </p>
          <form action className="mt-6 mb-7 space-y-4 rounded-lg p-8 shadow-2xl bg-[#FFFF]" method="POST" onSubmit={formik.handleSubmit}>
            <p className="text-lg title font-bold text-[#567189]">Sign in to your account</p>
            <div>
              {/* <label htmlFor="email" className="text-sm text-[#567189] font-medium">Email</label> */}
              <div className="relative mt-1">
              <TextField fullWidth id="standard-basic"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                label="email" variant="standard"
                helperText={formik.touched.email && formik.errors.email}
              />
                {/* <input type="email"  id="email" className="w-full rounded-lg border-gray-700 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" /> */}
              </div>
            </div>
            <div>
              {/* <label htmlFor="password" className="text-sm font-medium text-[#567189]">Password</label> */}
              <div className="relative mt-1">
              <TextField fullWidth id="standard-basic"
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                label="password" variant="standard"
                helperText={formik.touched.password && formik.errors.password}
              />
                {/* <input type="password"  id="password" className="w-full rounded-lg border-gray-700 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" /> */}
              </div>
            </div>

            <button type="submit" className="block w-full rounded-lg bg-[#93C6E7] px-5 py-3 text-sm font-medium text-white">
              Sign in
            </button>
          </form>
          {/* <GoogleButton
                onClick={() => { 
                  // redirect to google login
                  window.location.href = 'http://localhost:5000/api/auth/google'
                  
                }}
            /> */}
        </div>
      </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login