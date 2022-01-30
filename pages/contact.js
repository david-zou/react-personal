import { useState } from "react"

import Navbar from "../components/Navbar"
import styles from '../styles/Home.module.css'

// For theme state retrieval
import { useTheme } from "next-themes"

// Redux packages
import { connect } from 'react-redux'
import { setLightMode } from '../redux/actions/main'

// Form Validation
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Contact(props) {

  // Dark Mode
  const { lightMode, setLightMode } = props
  const { theme } = useTheme()

  // Needed to remember state on page refresh for redux lightMode state to work properly
  setLightMode(theme)

  // form validation rules 
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    email: Yup.string()
        .max(50, "Email is too long")
        .required('Email is required')
        .email('Email is invalid'),
    textMessage: Yup.string()
        .max(256, 'Message cannot be more than 256 characters')
        .required('Message must not be empty')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit(data) {
      // display form data on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
      return false
  }

  const [ firstName, setFirstName ] = useState('') 
  const [ lastName, setLastName ] = useState('')

  function handleFirstNameChange(data) {
    setFirstName(data.target.value)
  }

  function handleLastNameChange(data) {
    setLastName(data.target.value)
  }

  function handleFirstNameTrim(data) {
    setFirstName(data.target.value.trim())
  }

  function handleLastNameTrim(data) {
    setLastName(data.target.value.trim())
  }

  return (
      <div>
        <Navbar />
        <div className={styles.contact_page}>

          <h2 className={`${styles.contact_title} text-blue-400 dark:text-white`}>
            Contact Me
          </h2>

          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
                  First Name
                </label>
                <input className={`${errors.firstName ? '' : 'is-valid-firstname'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} name="firstName" {...register('firstName')} type="text" placeholder="First Name" onChange={handleFirstNameChange} onBlur={handleFirstNameTrim} value={firstName} />
                <div className={`${errors.firstName ? '' : 'invisible'} invalid-firstname text-red-500 text-xs italic`}>{errors.firstName?.message}</div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
                  Last Name
                </label>
                <input className={`${errors.lastName ? '' : 'is-valid-lastname'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} name="lastName" type="text" {...register('lastName')} placeholder="Last Name" onChange={handleLastNameChange} onBlur={handleLastNameTrim} value={lastName} />
                <div className={`${errors.lastName ? '' : 'invisible'} invalid-firstname text-red-500 text-xs italic`}>{errors.lastName?.message}</div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
                  E-mail
                </label>
                <input className={`${errors.email ? '' : 'is-valid-email'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} name="email" type="email" {...register('email')} placeholder="Email" />
                <div className={`${errors.email ? '' : 'invisible'} text-red-500 text-xs italic`}>{errors.email?.message}</div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white">
                  Message
                </label>
                <textarea className={`${errors.textMessage ? '' : 'is-valid-textMessage'} no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`} name="textMessage" {...register('textMessage')}></textarea>
                <div className={`${errors.textMessage ? '' : 'invisible'} text-red-500 text-xs italic`}>{errors.textMessage?.message}</div>
              </div>
            </div>
            <div className="md:flex md:items-center">
            <div data-netlify-recaptcha="true"></div>
              <div className="form-group md:w-1/3">
                <button type="submit" className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-1 rounded">Send</button>
                <button type="button" onClick={() => reset()} className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-1 rounded">Reset</button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return { lightMode: state.main.lightMode }
}

const mapDispatchToProps = {
  setLightMode
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
