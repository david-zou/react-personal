import Navbar from '../components/Navbar'
import BlogPost from '../components/BlogPost'

// For theme state retrieval
import { useTheme } from "next-themes"

// Redux packages
import { connect } from 'react-redux'
import { setLightMode } from '../redux/actions/main'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function Blog({ posts }) {
  // Needed to remember state on page refresh for redux lightMode state to work properly
  const { theme } = useTheme();
  setLightMode(theme)

  return (
    <div>
      <Navbar />
      <div className="m-5 grid grid-flow-row gap-3">
        {posts.map((post, index) => ( 
          <BlogPost post={post} key={index} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('pages/blog/posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd() + '/pages/blog/posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return {
    props: {
      posts
    }
  }
}

const mapStateToProps = state => {
  return { lightMode: state.main.lightMode }
}

const mapDispatchToProps = {
  setLightMode
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
