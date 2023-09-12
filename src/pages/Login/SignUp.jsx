import React, { useEffect, useState } from 'react'
import './signUp.css'
import { Link as Anchor, useNavigate } from "react-router-dom"
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import GButton from '../../components/GButton/GButton'
import { useDispatch } from 'react-redux'
import { login, signUp } from '../../redux/actions/authActions'
import Banner from '../../components/Banner/Banner'


const SignUp = () => {

    const bannerImg = "https://images.unsplash.com/photo-1610995195985-7229a1409d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

    const dispatch = useDispatch()
    
    const getCurrentDate = () => {
        const currentDate = new Date()
        const year = currentDate.getFullYear()-18
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
        const day = currentDate.getDate().toString().padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    const [userData, setUserData] = useState({
        name: "",
        surname: "",
        profile_pic: "https://cdn.glitch.global/81b475d8-f616-4e33-9658-c8482b459606/user.png?v=1694018146204",
        birth_date: getCurrentDate(),
        country: "",
        email: "",
        password: "",
        terms: false
    })

    const handleDataChange = (e) => {
        setUserData((prevState) => {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {...userData}
        delete user.terms
        console.log(user)
        dispatch(signUp(user))
            .then((res) => {
                console.log(res)
                if(res.payload.success) {
                alert("Welcome " + res.payload.userData.name)
                navigate('/')
                } else {
                    alert("Error: " + res.payload.message)
                    navigate('/signin')
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            })
      }

    const handleSubmitGoogle = async (data) => {
        const user = {...data}
        delete user.terms
        console.log(user)
        dispatch(signUp(user))
            .then((res) => {
                console.log(res)
                if(res.payload.success) {
                alert("Welcome " + res.payload.userData.name)
                navigate('/')
                } else {
                    alert("Error: " + res.payload.message)
                    navigate('/signin')
                }
            })
            .catch((error) => {
                alert("An error occurred: " + error.message);
            })
    }

    const [countries, setCountries] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/api/countries')
        .then(res => {
            setCountries(res.data.response)
            //console.log(countries)
        })
    },[])

  return (
    <section>
        <div className='login-container'>
        <Banner imageURL={bannerImg} height="130vh" />
        <div className="py-3 text-center container text-container">
            <div className="row py-lg-4 mask-custom">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <h1 className="fw-light mt-3">Sign Up</h1>
                    <form className="p-3">
                        <div className="col-md mb-3">
                            <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleDataChange} value={userData.name} />
                        </div>
                        <div className="col-md mb-3">
                            <input type="text" className="form-control" name="surname" placeholder="Surname" onChange={handleDataChange} value={userData.surname} />
                        </div>
                        <div className="col-md mb-3">
                            <input type="url" className="form-control" name="profile_pic" placeholder="Enter your profile pic URL" onChange={handleDataChange} value={userData.profile_pic} />
                        </div>
                        <div className="row align-items-center mb-3">
                            <div className="col-md-5">
                                <label className="form-label mb-0">Confirm your age: </label>
                            </div>
                            <div className="col-md-7">
                                <input type="date" className="form-control" name="birth_date" value={userData.birth_date} onChange={handleDataChange} />
                            </div>
                        </div>
                        <div className="col-md mb-3">
                            <select name="country" className="form-select" onChange={handleDataChange} value={userData.country}>
                                <option>Select your country...</option>
                                {countries.map(country => (
                                    <option key={country._id} value={country._id}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md mb-3">
                            <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleDataChange} value={userData.email} />
                        </div>
                        <div className="col-md mb-3">
                            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleDataChange} value={userData.password} />
                        </div>
                        <div className="col-12 mb-3">
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input me-1" type="checkbox" name="terms" onChange={handleDataChange} value={userData.terms} />
                                <label className="form-check-label mb-0">I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <div className="col-md text-center mt-3 mb-3">
                            <button type="submit" className="btn btn-primary btn-block w-100" onClick={handleSubmit}>Sign Up</button>
                        </div>
                        <p className="mt-4 mb-0 leading-normal text-sm">You have an account? <Anchor className="font-bold text-slate-700 anchor" to="/signin">Sign In</Anchor></p>
                        <p className="mt-4 mb-0 leading-normal text-sm mb-3">Or Sign up with...</p>
                          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
{/*                               <GoogleLogin
                                  onSuccess={credentialResponse => {
                                      console.log(credentialResponse)
                                      const infoGoogleUser = jwtDecode(credentialResponse.credential)
                                      console.log(infoGoogleUser)
                                      handleSubmitGoogle({
                                          name: infoGoogleUser.given_name,
                                          surname: infoGoogleUser.family_name,
                                          profile_pic: infoGoogleUser.picture,
                                          birth_date: '1980-01-01',
                                          country: "64fa18ece04801ae6c4d571d",
                                          email: infoGoogleUser.email,
                                          password: import.meta.env.VITE_GOOGLE_PW,
                                          terms: true
                                      })
                                  }}
                                  onError={() => {
                                      console.log('Login Failed')
                                  }}
                              /> */}
                              <GButton fn={handleSubmitGoogle} textButton="up"/>
                          </GoogleOAuthProvider>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default SignUp