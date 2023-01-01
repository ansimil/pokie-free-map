import React from 'react'
import { useForm } from 'react-hook-form'
import reCAPTCHA from "react-google-recaptcha";
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
      <reCAPTCHA
        sitekey={"6LcxjMEjAAAAALRHFEu9rwzZx7pn7aqNx2KBpjSD"}
      />
      <input 
        type="submit"
        value="Submit"
        />
      </form>
    </div>
  )
}

export default Contact