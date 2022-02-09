import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

// For theme state retrieval
import { useTheme } from 'next-themes'

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

  // Handling post success
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  // Handling Recaptcha Success Condition
  function enableSubmit(){
    document.getElementById("send-button").disabled = false;
  }

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

  const formOptions = { 
    resolver: yupResolver(validationSchema),
  }

  // get functions to build form with useForm() hook
  // register: allows registering an element and applying the appropriate validation rules.
  // handleSubmit: receives form data if validation is successful.
  // setValue: used to set value for onBlur lifecycle so react-hook-form can detect the change for validation.
  // formState: the state of the entire form.
  const { register, handleSubmit, setValue, reset, formState } = useForm(formOptions)
  const { errors } = formState

  function trimFirstName(event) {
    return setValue("firstName", event.target.value.trim())
  }

  function trimLastName(event) {
    return setValue("lastName", event.target.value.trim())
  }

  return (
      <div>
        <Head>
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </Head>
        <Navbar />
        <div className={styles.contact_page}>

          <h2 className={`${styles.contact_title} text-blue-400 dark:text-white`}>
            Contact Me
          </h2>

          <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" action="contact/?success=true" className="w-full max-w-lg">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="firstName">
                  First Name
                </label>
                <input className={`${errors.firstName ? '' : 'is-valid-firstname'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} type="text" name="firstName" {...register('firstName')} placeholder="First Name" onBlur={trimFirstName} />
                <div className={`${errors.firstName ? '' : 'invisible'} invalid-firstname text-red-500 text-xs italic`}>{errors.firstName?.message}</div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="lastName">
                  Last Name
                </label>
                <input className={`${errors.lastName ? '' : 'is-valid-lastname'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} name="lastName" type="text" {...register('lastName')} placeholder="Last Name" onBlur={trimLastName} />
                <div className={`${errors.lastName ? '' : 'invisible'} invalid-firstname text-red-500 text-xs italic`}>{errors.lastName?.message}</div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="email">
                  E-mail
                </label>
                <input className={`${errors.email ? '' : 'is-valid-email'} appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`} name="email" type="email" {...register('email')} placeholder="Email" />
                <div className={`${errors.email ? '' : 'invisible'} text-red-500 text-xs italic`}>{errors.email?.message}</div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="textMessage">
                  Message
                </label>
                <textarea className={`${errors.textMessage ? '' : 'is-valid-textMessage'} no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none`} name="textMessage" {...register('textMessage')}></textarea>
                <div className={`${errors.textMessage ? '' : 'invisible'} text-red-500 text-xs italic`}>{errors.textMessage?.message}</div>
              </div>
            </div>
            <div className="g-recaptcha pb-2" data-sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY} data-netlify-recaptcha="true" data-callback="enableSubmit"></div>
            <div className="md:flex md:items-center">
              <div className="form-group md:w-1/3">
                <button type="submit" className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-1 rounded disabled:bg-slate-500" id="send-button" disabled="disabled">Send</button>
                <button type="button" onClick={() => reset()} className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-1 rounded">Reset</button>
              </div>
              <div className="md:w-2/3">
                {success && (
                  <p style={{ color: 'green'}}>
                    Message successfully sent!
                  </p>
                )}
              </div>
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
