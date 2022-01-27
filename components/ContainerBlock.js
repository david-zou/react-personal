import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import ProfilePicture from '../public/profile-picture.jpeg'

// For theme state retrieval
import { useTheme } from 'next-themes'

// Redux packages
import { connect } from 'react-redux'
import { setLightMode } from '../redux/actions/main'


function ContainerBlock(props, { children, ...customMeta}) {
  const router = useRouter()

  const meta = {
    title: "Default Title",
    description: "Default Description",
    type: "website",
    ...customMeta,
  }

  const { lightMode, setLightMode } = props

  const { theme } = useTheme();

  // Needed to remember state on page refresh for redux lightMode state to work properly
  setLightMode(theme)

  return (
    <div className={styles.container}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <div className={`${styles.landing} lg:grid lg:grid-cols-2 lg:gap-4`}>
        <div className="flex justify-center lg:order-last">
            <div className="bg-white rounded-full shadow-xl px-1 pt-1 m-auto"> 
              <Image 
              src={ProfilePicture}
              className="rounded-full z-10"
              height="200%"
              width="200%"
              objectFit="cover"
              alt="Picture of Me" />
            </div>
          </div>
          <div className={`${styles.introduction}`}>
              <h2 className={styles.title}>
                Hi, I&#39;m David Zou.
              </h2>
              <p className={styles.self_description}>
                I am an IT Administrator working towards
                a career within the rapidly growing software
                engineering industry.
              </p>
          </div>
        </div>

        <div>
          <div className="font-semibold text-center">Contact me:</div>

          <div className={styles.landing_contact}>

            {/* LinkedIn */}
            <Link href='https://www.linkedin.com/in/david-zou/' passHref>
              <button className="bg-blue-600 p-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                  <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                </svg>
              </button>
            </Link>

            {/* Github */}
            <Link href='https://github.com/david-zou' passHref>
              <button className="bg-gray-700 p-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
                </svg>
              </button>
            </Link>

            {/* Email */}
            <Link href='/contact' passHref>
              <button className="bg-red-700 p-2 m-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="2 2 16 16">
                  <g fill="none">
                    <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" fill="currentColor"/>
                  </g>
                </svg>
              </button>
            </Link>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={lightMode === "light" ? styles.logo : `${styles.logo} ${styles.inverted}`}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


const mapStateToProps = state => {
  return { lightMode: state.main.lightMode }
}

const mapDispatchToProps = {
  setLightMode
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerBlock)