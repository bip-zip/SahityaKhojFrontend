import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
// import env from 'react-dotenv';
import { gapi } from "gapi-script";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function LoginGoogle() {
    const navigate = useNavigate();
    useEffect(() => {
        // window.gapi.load('client:auth2', () => {
        //     window.gapi.client.init({
        //         clientId:process.env.REACT_APP_GOOGLE_CLIENT_ID ,
        //         plugin_name: "chat"
        //     })})
        gapi.load("client:auth2", () => {
            gapi.client.init({
              clientId:
              process.env.REACT_APP_GOOGLE_CLIENT_ID ,
              plugin_name: "chat",
            });
          });
    },[]);
    



    const handleFailure= (result)=>{
        console.log("this is error message",result)
    }

    const handleLogin =(googleData)=>{
        console.log(googleData)
        // console.log(googleData.profileObj.googleId)
        // console.log(googleData.profileObj.givenName)
        // console.log(googleData.profileObj.familyName)
        // console.log(googleData.profileObj.email)
        const userData = {
            googleData:googleData.profileObj.googleId,
            firstname:googleData.profileObj.givenName,
            lastname:googleData.profileObj.familyName,
            email:googleData.profileObj.email
        }

        axios.post("http://localhost:8080/api/users/google-signin", userData).then(result=>{
            if(result.data.status){
                localStorage.setItem('token',result.data.token)
                    localStorage.setItem('penname',result.data.penname)
                    localStorage.setItem('_id',result.data.uid)
                navigate("/profile")
            }
            else{
                toast.error("Something's wrong.")
            }
        })
    }

    return (
    <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Login with Google"
    onSuccess={handleLogin}
    onFailure={handleFailure}
    cookiePolicy={"single_host_origin"}
    >
    
    </GoogleLogin>
)
}


export default LoginGoogle