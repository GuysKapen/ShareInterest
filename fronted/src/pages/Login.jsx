import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc'
import images from '../constants/images'

function Login() {

    function responseGoogle(response) {
        localStorage.setItem('user', JSON.stringify(response.profileObj))

        const { name, googleId, imageUrl } = response.profileObj

        const doc = {
            _id: googleId,
            _type: 'user',
            username: name,
            image: imageUrl
        }
    }

    return (
        <div className='flex justify-start items-center flex-col h-screen'>
            <div className='w-screen h-screen relative'>
                <video className='w-full h-full object-cover'
                    src={images.shareVideo}
                    loop
                    controls={false}
                    muted
                    autoPlay>
                </video>
            </div>

            <div className="absolute flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 bg-blackOverlay">
                <div className="p5">
                    <img src={images.logoWhite} alt="logo" className='w-24' />
                </div>

                <div className="shadow-2xl mt-4">
                    <GoogleLogin
                        clientId={import.meta.env.VITE_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <button
                                type='button'
                                className='bg-mainColor flex justify-center items-center px-6 py-3 rounded-lg outline-none cursor-pointer'
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}>
                                <FcGoogle className='mr-4' /> Sign in with Google
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy="single_host_origin">

                    </GoogleLogin>
                </div>
            </div>

        </div>
    )
}

export default Login