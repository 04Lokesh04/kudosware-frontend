// src/Signup.js
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [resume, setResume] = useState(null)
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('resume', resume)

    try{
      const url='http://localhost:5000/signup'
      const options={
        method:'POST',
        body:formData
      }
      const response= await fetch(url, options)
      console.log('Response Status:', response.status);
      if (response.ok){
        const result= await response.json()
        console.log('formdata submitted', result)
        navigate('/home')
      } else{
        console.log('formdata submission failed')
      }
    } catch(err){
      console.log('error', err)
    }

    
  }

  return (
    <div className='mainform'>
      <h1 className='form-heading'>Signup</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label className='inputlabel' id='input1'>
          Username
        </label>
        <input placeholder='Enter your name' type="text"  className='input' id='input1'
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required />

        <label className='inputlabel' id='input2'>
          Email        
        </label>
        <input placeholder='Enter your Email' type="email" className='input' id='input2'
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required />

        <label className='inputlabel' id='input3'>
          Phone
        </label>
        <input placeholder='Enter your phone number' type="tel" className='input' id='input3'
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required />

        <label className='inputlabel' id='input4'>
          Resume
        </label>
        <input type="file" className='input' id='input4'
        onChange={(e) => setResume(e.target.files[0])} 
        required />

        <button type="submit" className='button'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
