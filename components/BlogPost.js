import Link from 'next/link'
import Image from 'next/image'

// For theme state retrieval
import { useTheme } from "next-themes"

// Redux packages
import { connect } from 'react-redux'
import { setLightMode } from '../redux/actions/main'

function BlogPost({ post, index }) {
  // Needed to remember state on page refresh for redux lightMode state to work properly
  const { theme } = useTheme();
  setLightMode(theme)

  return (
    <div className="flex dark:bg-gray-700 shadow-md border border-gray-200 dark:border-gray-500 rounded-lg mb-5" key={index}>
      <div className={`${post.frontMatter.thumbnailUrl ? "w-3/4" : ""} p-5`}>
          <Link href={'/blog/' + post.slug} passHref>
            <a>
              <h5 className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight mb-2">{post.frontMatter.title}</h5>
            </a>
          </Link>
          <p className="font-normal text-gray-700 dark:text-white mb-3 line-clamp-3">{post.frontMatter.description}</p>
          <p><small className="text-muted">{post.frontMatter.date}</small></p>
          <button className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
            <Link href={'/blog/' + post.slug} passHref>
              Read more
            </Link>
          </button>
      </div>
      <div className={`relative h-full ${post.frontMatter.thumbnailUrl ? "w-1/4" : ""}`}>
        <Link href={'/blog/' + post.slug} passHref>
          { post.frontMatter.thumbnailUrl ? 
              <a>
                <Image src={post.frontMatter.thumbnailUrl} alt="" layout="fill" objectFit="cover" className="rounded-r-lg" />
              </a> :
              <></>
          }
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)