import React from 'react'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInandSignUpPage = () => {
  return (
    <div className='sign-in-page flex flex-wrap justify-center md:justify-between px-[15%] my-12'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInandSignUpPage