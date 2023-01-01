import React from 'react'
import { useForm } from 'react-hook-form'
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit, reset } = useForm()

  return (
    <div>
      <form 
      onSubmit={handleSubmit((data) => {
        console.log(data)
        reset()
        })}
      >
      <input 
      {...register('suggestion', {minLength: 5})}/>
      <input 
        type="submit"
        value="Submit"
        />
      </form>
    </div>
  )
}

export default Contact