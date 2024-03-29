import { useRef, useState} from 'react'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from "react-google-recaptcha";
import Loading from '../../Loading/Loading';
import axios from 'axios'
import './Contact.css'

const Contact = ({setHamburgerOpen}) => {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const { register, reset, watch } = useForm()
  const captchaRef = useRef(null)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const watchSuggestion = watch("suggestion");
    if (watchSuggestion.length < 5) {
      setIsError(true);
      setMessage('Text must be at least 5 characters long')
      return
    }
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    setIsLoading(true)
    await axios.post(`${process.env.REACT_APP_API_URL}/validatecaptcha`, {token, watchSuggestion})
        .then(() =>  {
          setIsLoading(false)
          reset()
          setIsError(false)
          setMessage('Thank you! Suggestion successfully submitted')
        })
        .catch((err) => {
          if (err.response?.data==='Nocaptcha'){
            setIsLoading(false)
            setIsError(true);
            setMessage('Please complete the Captcha')
          }
          else {
            setIsLoading(false)
            setIsError(true);
            setMessage('Something went wrong, please try again')
          }
        })
}

if (isLoading) {
  return (
    <Loading />
  )
}

  return (
    <div
    className='contactContainer'
    onClick={()=>{
      setHamburgerOpen(false)
    }}
    >
    <h2><span className='knowOfPubs'>Know of any pubs without pokies?</span> Simply fill out the suggestion form below</h2>
      <form 
      className='contactForm'
      onSubmit={handleSubmit}
      >
        <label><p>Suggestion</p></label>
        {message && <p className={isError ? 'red' : 'green'}>{message}</p>}
        <textarea 
          className="suggestionInput" 
          placeholder={`Let us know of any pubs/clubs/bars that don't have pokies`}
          {...register('suggestion')}
        />
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE}
          ref={captchaRef}
        />
        <input 
          className='suggestionSubmitBtn'
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

export default Contact