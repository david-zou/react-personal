import Navbar from '../components/Navbar'
import BlogPost from '../components/BlogPost'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Blog({ posts }) {
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
  const files = fs.readdirSync(path.join('pages/posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('pages/posts', filename), 'utf-8')
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
