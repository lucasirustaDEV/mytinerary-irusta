import React, { useEffect, useState } from 'react'
import './signIn.css'
import { Link as Anchor, useNavigate } from "react-router-dom"
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google'
import GButton from '../../components/GButton/GButton'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/authActions'
import Banner from '../../components/Banner/Banner'
import { toast } from 'react-toastify'

const SignIn = () => {

  const bannerImg = "https://images.unsplash.com/photo-1610995195985-7229a1409d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

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

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
    const user = {...userData}
    if (!user.email || !user.password) {
        toast.warn("Please complete all the required fields")
        return
    }
    dispatch(login(userData))
      .then((res) => {
        console.log(res)
        if(res.payload.success) {
          toast.success("Welcome " + res.payload.userData.name + '!')
          navigate('/')
        } else {
          toast.error("Error: " + res.payload.message)
        }
      })
      .catch((error) => {
        toast.error("An error occurred: " + error.message)
      })
  }

  const handleSubmitGoogle = async (data) => {
    console.log(data)
    dispatch(login(data))
      .then((res) => {
        console.log(res)
        if(res.payload.success) {
          toast.success("Welcome " + res.payload.userData.name + '!')
          navigate('/')
        } else {
          toast.error("Error: " + res.payload.message)
        }
      })
      .catch((error) => {
        toast.error("An error occurred: " + error.message)
      })
  }

  return (
    <section>
      <div className='login-container'>
        <Banner imageURL={bannerImg} height="85vh" />
        <div className="py-3 text-center container text-container">
          <div className="row py-lg-4 mask-custom">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="fw-light mt-3">Sign In</h1>
              <div className="details">
                <div className="col-md">
                  <input type="email" className="form-control" name="email" placeholder="Enter Email..." onChange={handleDataChange} value={userData.email} />
                </div>
                <div className="col-md mt-3">
                  <input type="password" className="form-control" name="password" placeholder="Enter Password..." onChange={handleDataChange} value={userData.password} />
                </div>
                <div className="col-md text-center mt-3 mb-3">
                  <button type="submit" className="btn btn-primary btn-block w-100" onClick={handleSubmit}>Sign In</button>
                </div>
                <p className="mt-4 mb-0 leading-normal text-sm">Don't have an account? <Anchor className="font-bold text-slate-700 anchor" to="/signup">Sign up</Anchor></p>
                <p className="mt-4 mb-0 leading-normal text-sm">Or Sign in with...</p>
                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
                  <div className='mt-3 mb-3 text-center'>
                    <GButton fn={handleSubmitGoogle} textButton="in" />
                  </div>
                </GoogleOAuthProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn