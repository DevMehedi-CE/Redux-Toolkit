import React from 'react'
import { useSelector } from 'react-redux'

const Content = () => {
    const user = useSelector((state)=>state.user.user)
    if(!user){
        return <h2>No user</h2>
    }
  return (

    <div className='flex justify-between bg-green-300'>
      <div>
        <h1  className='font-mono text-black p-5 text-4xl' >Dashbord</h1>
      </div>
      <div>
      <h2  className='font-mono text-black p-5 text-2xl'  >user information</h2>
      <h4  className='font-mono text-black p-5 text-xl' > Name: {user.name}</h4>
      <h4  className='font-mono text-black p-5 text-xl' > Email:{user.email}</h4>
    </div>

    
    </div>

    
  )
}

export default Content
