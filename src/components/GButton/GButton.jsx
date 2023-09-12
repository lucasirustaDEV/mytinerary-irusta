import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import './gbutton.css'
import axios from 'axios'

const GButton = ({ fn, textButton }) => {
    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            console.log(tokenResponse)
            const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers:{
                    Authorization: "Bearer " + tokenResponse.access_token
                } 
            })
            fn({
                name: data.given_name,
                surname: data.family_name,
                profile_pic: data.picture,
                birth_date: '1980-01-01',
                country: "64fa18ece04801ae6c4d571d",
                email: data.email,
                password: import.meta.env.VITE_GOOGLE_PW,
                terms: true
            })
            console.log(data)
        }
    })

  return (
    <section>
        <button onClick={() => login()} type="button" className="login-with-google-btn" >
            Sign {textButton} with Google
        </button>
    </section>
  )
}

export default GButton