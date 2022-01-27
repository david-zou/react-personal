import Navbar from "../components/Navbar"
import styles from '../styles/Home.module.css'

// For theme state retrieval
import { useTheme } from "next-themes"

// Redux packages
import { connect } from 'react-redux'
import { setLightMode } from '../redux/actions/main'

function Contact(props) {
  const { lightMode, setLightMode } = props

  const { theme } = useTheme()

  // Needed to remember state on page refresh for redux lightMode state to work properly
  setLightMode(theme)

  return (
      <div>
        <Navbar />
        <div className={styles.contact_page}>

          <h2 className={`${styles.contact_title} text-blue-400 dark:text-white`}>
            Contact Me
          </h2>

          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-password">
                  E-mail
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                <p className="text-gray-600 text-xs italic dark:text-white">Some tips - as long as needed</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" for="grid-password">
                  Message
                </label>
                <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                <p className="text-gray-600 text-xs italic dark:text-white">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
              </div>
            </div>
            <div className="md:flex md:items-center">
            <div data-netlify-recaptcha="true"></div>
              <div className="md:w-1/3">
                <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Send
                </button>
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
