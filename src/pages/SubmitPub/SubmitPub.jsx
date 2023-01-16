/* eslint-disable no-undef */
import React from 'react'
import { useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './SubmitPub.css'

const SubmitPub = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    
    const onSubmit = async (data) =>{
        await axios.post(`${process.env.REACT_APP_API_URL}/submitpub`, { data })
        .then(() =>  {
            reset()
            setMessage('Pub successfully submitted')
            setIsError(false)
        })
        .catch(() => {
            setMessage('Something went wrong, please try again')
            setIsError(true)
        })
    }

  return (
    <div className='submitContainer'>
    {message && <p className={isError ? "red" : "green"}>{message}</p>}
    <h2>Submit Pub</h2>
    <form 
    className='formContainer'
    onSubmit={handleSubmit(onSubmit)}
    >
    <div className='submitForm'>
    <label><p>Name</p></label>
    {errors.name?.type === 'required' && <p className='inputError' role="alert">{errors.name.message}</p>}
    <input 
    className='namePub'
    type="text" 
    name='name'
    {...register('name', {required: "name required"})}
    />
    <label><p>Street</p></label>
    {errors.street?.type === 'required' && <p className='inputError' role="alert">{errors.street.message}</p>}
    <input 
    className='streetPub'
    type="text"
    name='street' 
    {...register('street', {required: "street required"})}
    />
    <label><p>City</p></label>
    {errors.city?.type === 'required' && <p className='inputError' role="alert">{errors.city.message}</p>}
    <input 
    className='cityPub'
    type="text"
    name='city' 
    {...register('city', {required: "city required"})}
    />
    <label><p>State</p></label>
    {errors.state?.type === 'required' && <p className='inputError' role="alert">{errors.state.message}</p>}
    <input 
    className='statePub'
    type="text"
    name='state' 
    {...register('state', {required: "state required"})}
    />
    <label><p>Postcode</p></label>
    {errors.postcode?.type === 'required' && <p className='inputError' role="alert">{errors.postcode.message}</p>}
    <input 
    className='postcodePub'
    type="number"
    name='postcode' 
    {...register('postcode', {required: "postcode required"})}
    />
    <label><p>Image link</p></label>
    <input 
    className='imagePub'
    type="text"
    name='image' 
    {...register('image')}
    />
    </div>
    <div className='submitForm'>
    <label><p>Longitude</p></label>
    {errors.longitude?.type === 'required' && <p className='inputError' role="alert">{errors.longitude.message}</p>}
    <input 
    className='longitudePub'
    type="text"
    name='longitude' 
    {...register('longitude', {required: "longitude required"})}
    />
    <label><p>Latitude</p></label>
    {errors.latitude?.type === 'required' && <p className='inputError' role="alert">{errors.latitude.message}</p>}
    <input 
    className='latitudePub'
    type="text"
    name='latitude' 
    {...register('latitude', {required: "latitude required"})}
    />
    <label><p>Website link</p></label>
    {errors.websiteLink?.type === 'required' && <p className='inputError' role="alert">{errors.websiteLink.message}</p>}
    <input 
    className='websiteLinkPub'
    type="text"
    name='websiteLink' 
    {...register('websiteLink', {required: "website link required"})}
    />
    <label><p>Date verified</p></label>
    {errors.dateVerified?.type === 'required' && <p className='inputError' role="alert">{errors.dateVerified.message}</p>}
    <input 
    className='dateVerifiedPub'
    type="date"
    name='dateVerified'
    {...register('dateVerified', {required: "date required"})} 
    />
    <label><p>Password</p></label>
    {errors.password?.type === 'required' && <p className='inputError' role="alert">{errors.password.message}</p>}
    <input 
    className='passwordPub'
    type="password"
    name='password'
    {...register('password', {required: "password required"})} 
    />
    <input 
    className='submitPubBtn'
    type="submit"
    value="Submit"
    />
    </div>
    </form>

    </div>
  )
}

export default SubmitPub