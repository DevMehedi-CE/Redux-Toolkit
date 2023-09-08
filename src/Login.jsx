import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setUser } from './userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [name,setName]= useState("")
    const [email,setEmail]=useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelSubmit=(e)=>{
        e.preventDefault();
        dispatch(setUser({name,email}))
       navigate('/dashbord')
    }
  return (
    <div className='container mx-auto'>

     <div className='bg-gray-400'>
     <form onSubmit={handelSubmit} className='w-1/2 mx-auto py-10'  >

      <h1 className=' mx-auto  py-2 px-5 w-1/2 bg-sky-900 text-white font-bold'>Please Login </h1>

      <div className='mt-5'>
      <input onChange={(e)=>setName (e.target.value)} value={name} className='py-2 px-5 w-1/2 outline-sky-900' type="name" placeholder='Name' />  <br />

      </div>

  <div className='mt-5'>
  <input onChange={(e)=>setEmail (e.target.value)} value={email} className='py-2 px-5 w-1/2 outline-sky-900' type="email " placeholder='Email' />

  </div>
<button className='py-2 px-5 w-1/2 bg-sky-900 text-white font-bold mt-5 ' >Submit</button>
</form>

     </div>
    </div>
  )
}

export default Login
