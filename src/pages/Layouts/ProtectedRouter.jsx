import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
    const { token } = useSelector(store => store.authReducers)
    //console.log(token)
    if (token === null) {
        return children
    }
    return <Navigate to='/'/>
}

export default ProtectedRouter