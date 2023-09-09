import React, { useEffect, useState } from 'react'
import './signUp.css'
import { Link as Anchor } from "react-router-dom"
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import GButton from '../../components/GButton/GButton'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/authActions'


const SignUp = () => {

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
        repassword: "",
        terms: false
    })

    const handleDataChange = (e) => {
        setUserData((prevState) => {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = async (e) => {
        //console.log(userData)
        e.preventDefault()
        const user = {...userData}
        if (user.terms) {
            delete user.terms
            delete user.repassword
            try {
                const res = await axios.post('http://localhost:3000/api/auth/up', user)
                console.log(res)
                dispatch(login(res.data))                
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleSubmitGoogle = async (data) => {
        //e.preventDefault()
        const user = { ...data }
        if (user.terms) {
            delete user.terms
            delete user.repassword
            try {
                const res = await axios.post('http://localhost:3000/api/auth/up', user)
                console.log(res)
                dispatch(login(res.data))                
            } catch (error) {
                console.log(error)
            }
        }
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
    <section className='container'>
        <div className='card form-card'>
            <form className="row g-3 p-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleDataChange} value={userData.name}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Surname</label>
                    <input type="text" className="form-control" name="surname" onChange={handleDataChange} value={userData.surname}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Birthdate</label>
                    <input type="date" className="form-control" name="birth_date"  value={userData.birth_date} onChange={handleDataChange}/>
                </div>
                  <div className="col-md-6">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select name="country" className="form-select" onChange={handleDataChange} value={userData.country}>
                          <option>Choose...</option>
                          {countries.map(country => (
                              <option key={country._id} value={country._id}>
                                  {country.name}
                              </option>
                          ))}
                      </select>
                  </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="" onChange={handleDataChange} value={userData.email}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleDataChange} value={userData.password}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Re enter Password</label>
                    <input type="password" className="form-control" name="repassword" onChange={handleDataChange} value={userData.repassword}/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="terms" onChange={handleDataChange} value={userData.terms}/>
                    <label className="form-check-label" >
                        I agree the Terms and Conditions
                    </label>
                    </div>
                </div>
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                </div>
                
                <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <Anchor className="font-bold text-slate-700" to="/signin">Sign in</Anchor></p>
                <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
                    <GoogleLogin
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
                            password: "Aa11.",
                            repassword: "Aa11.",
                            terms: true
                        })
                      }}
                      onError={() => {
                        console.log('Login Failed')
                      }}
                    />
                    <GButton fn={handleSubmitGoogle}/>
                </GoogleOAuthProvider>
            </form>
        </div>
    </section>
  )
}

export default SignUp