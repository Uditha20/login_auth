import React, { useState } from 'react'
import axios from "axios";


function Register() {

  const [data,setData]=useState({
    name:"",
    email:"",
    password:"",

  })

  const changeHandler=(e)=>{
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
   
  }
  const registerUser=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/user/register', data);

      // Assuming the backend returns a response with a success message
      console.log(response.data);

      // Optionally, you can reset the form data after successful submission
      setData({
        name: '',
        email: '',
        password: '',
      });

      // You can also redirect the user or perform other actions based on the response
    } catch (error) {
      console.error('There was a problem with the request:', error);

      // Handle errors, show a message to the user, etc.
    }
  }

  return (
    <div><div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register here
      </h2>
    </div>
 
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST" onSubmit={registerUser}>
        
      <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
          
          </div>
          <div className="mt-2">
            <input
    
              name="name"
              type="text"
              autoComplete="current-password"
              required
              value={data.name}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={changeHandler}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
 
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          
          </div>
          <div className="mt-2">
            <input
    
              name="password"
              type="password"
              value={data.password}
              onChange={changeHandler}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

       
    
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
 
     
    </div>
  </div></div>
  )
}

export default Register