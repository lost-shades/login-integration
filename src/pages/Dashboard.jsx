import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthMutation } from '../store/api/apiSlice'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/slices/authSlice'

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const { isLoading} = useAuthMutation()

  const details = useSelector((state)=>state.auth)
  console.log(details)

  const handleLogout= () => {
    dispatch(logout())
    navigate('/')
}

  return (
    <div>
     { isLoading ? (
      <p>Loading...</p>
    ) : (
    <div className="wrap">
        <h1>Welcome {`${details.username}`}</h1>
        <p>{`Your username is ${details.username}`}</p>
        <button onClick={handleLogout}>Log out</button>
    </div>
  )}
  </div>
  )
}

export default Dashboard