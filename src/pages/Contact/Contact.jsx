import {useRef} from 'react'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit, reset } = useForm()
  const captchaRef = useRef(null)

  return (
    <div className='contactContainer'>
      <form 
      className='contactForm'
      onSubmit={handleSubmit((data) => {
        console.log(data)
        reset()
        })}
      >
      <label>Suggestion</label>
      <textarea 
      {...register('suggestion', {minLength: 5})}
      className="suggestionInput"  
      />
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
        ref={captchaRef}
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