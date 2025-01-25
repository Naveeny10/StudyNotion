import React, { useState } from 'react'
import loginImage from './assets/Images/login.webp'
import { HighlightText } from './components/core/HomePage/HighlightText'
import CTAButton from './components/core/HomePage/Button'
const Login = () => {
  const [formdata,setformdata]= useState({
                                     email:"",
                                     password:"",
                                     profile:"Student", 
                                    });
  const handleEmail =(e)=>{
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formdata);
      
  };
  // const handlePassword =(e)=>{
  //   const val=e.target.value;
  //   setformdata((prev)=>({
  //       ...prev,
  //       password:val,
  //   }));
  //   console.log(formdata);
  // };

  const handleProfile =(e)=>{
    const val=e.target.name;
    setformdata((prev)=>({
        ...prev,
        profile:val,
    }));
};
const handleSub = (e) => {
  e.preventDefault();

  // Access the form by its id and submit it
  document.getElementById('form').submit();
};
const handleSubmit=(e)=>{
  e.preventDefault();
  handleEmail(e);
  console.log(formdata);

}

  return (
    <div >
      <div className='bg-richblack-900 w-screen h-screen'>
      <div className='flex flex-row w-11/12 max-w-maxContent mx-auto text-white pt-28'>
          <form id='form' onSubmit={handleSubmit}>
          <div className='flex flex-col w-[50%] items-start'>
            <div className='text-4xl font-semibold text-richblack-25'>
              Welcome Back
            </div>
            <div className='text-lg text-richblack-600'>
              Build skills for today,tomorrow, and beyond.<HighlightText text={"Education to future-proof your career."}/>
            </div>
            <div className='flex flex-row w-fit bg-richblack-800 gap-3 rounded-full'>
              <button className={` rounded-full ml-1 my-1 p-2 px-4 ${formdata.profile==="Student" ? "bg-richblack-900":"bg-richblack-800"}`} name='Student' onClick={handleProfile}>Student</button>
              <button className={` rounded-full ml-1 my-1 p-2 px-4 ${formdata.profile==="Instructors" ? "bg-richblack-900":"bg-richblack-800"}`} name='Instructors' onClick={handleProfile}> Instructors</button>
            </div>
            <div className='text-blue-200'>
              <label htmlFor='email'>Email<span>*</span></label>
              <br/>
              <input
              type='email'
              id='email'
              name='email'
              // value={formdata.email}
              // onChange={handleEmail}
              />
            </div>
            <div className='text-blue-200'>
              <label htmlFor='password'>Passord</label>
              <br/>
              <input
              type='password'
              id='password'
              // value={formdata.password}
              name='password'
              // onChange={handlePassword}
              />
            </div>
            <div className='w-fit' onClick={handleSub}>
            <CTAButton active={true} linkto={"/signup"} >Sign in</CTAButton>
            </div>
          </div>
          </form>
          <div>
            <img src={loginImage}
            alt='login Image'/>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Login
