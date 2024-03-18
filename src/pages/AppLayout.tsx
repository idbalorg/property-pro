import React from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import { useAuth } from '../context/AuthContext'
import { Outlet } from 'react-router'

const AppLayout = () => {
  const {isAuthenticated} = useAuth()
  return (
    <>
    {isAuthenticated && <><SideBar/>
    <Main/>
    </>}

    </>
  )
}

export default AppLayout