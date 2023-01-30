import React , {useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout , reset} from '../features/auth/authSlice'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
   

    if (!user) {
      navigate('/')
    }

    // dispatch()

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])

  const SignOut = () => {
    dispatch(logout())
  }



  // if (isLoading) {
  //   return (
  //     <Box sx={{ 
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '100vh',
  //       width: '100vw',
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       zIndex: 9999,
  //       backgroundColor: 'rgba(0,0,0,0.5)',

  //   }}>
  //     <CircularProgress
  //       color="primary"
  //       size={75}
  //      />
  //   </Box>
  //   )

  // }
  return (
    <>
    <button className='text-[#00337C] font-bold text-base lg:text-lg'
    onClick={() =>  SignOut()}
    >Logout</button></>
  )
}

export default Logout