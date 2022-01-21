import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import ProfilePicture from '../public/profile-picture.jpeg'

// Redux packages
import { useState } from 'react'
import { connect } from 'react-redux'
import { setInfo } from '../redux/actions/main'


function ContainerBlock(props, { children, ...customMeta}) {
  const router = useRouter();

  const meta = {
    title: "Default Title",
    description: "Default Description",
    type: "website",
    ...customMeta,
  }

  const { name, setInfo } = props
  const [ newName, setName ] = useState("")


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
        
        <div
          className="flex items-center">
          <p>Enter a Name:</p>
          <input
            className="m-2"
            type="text"
            value={newName}
            onChange={(e) => setName(e.target.value)}>
          </input>
          <button
            onClick={() => setInfo(newName)}>
            Submit
          </button>
        </div>
        
        <div>Welcome { name } !</div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


const mapStateToProps = state => {
  return { name: state.main.name }
}

const mapDispatchToProps = {
  setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerBlock)