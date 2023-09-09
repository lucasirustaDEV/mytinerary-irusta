import React, { useEffect, useState } from 'react'
import './signUp.css'
import { Link as Anchor } from "react-router-dom"
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import GButton from '../../components/GButton/GButton'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/authActions'

const SignIn = () => {

  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const handleDataChange = (e) => {
    setUserData((prevState) => {
        return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    console.log(userData)
    e.preventDefault()
    //const user = {...userData}
    try {
      const res = await axios.post('http://localhost:3000/api/auth/in', userData)
      console.log(res)
      dispatch(login(res.data))      
    } catch (error) {
      console.log(error)
    }
  }


  const handleSubmitGoogle = async (data) => {
    //e.preventDefault()
    const user = { ...data }
    try {
      const res = await axios.post('http://localhost:3000/api/auth/in', user)
      console.log(res)
      dispatch(login(res.data))      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <section className='container'>
        <div className='card form-card'>
            <form className="row g-3 p-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="" onChange={handleDataChange} value={userData.email}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleDataChange} value={userData.password}/>
                </div>
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        const infoGoogleUser = jwtDecode(credentialResponse.credential)
                        console.log(infoGoogleUser)
                        handleSubmitGoogle({
                            email: infoGoogleUser.email,
                            password: "Aa11.",
                        })
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                    <GButton fn={handleSubmitGoogle}/>
                </GoogleOAuthProvider>
            </form>
        </div>
    </section>
  )
}

export default SignIn