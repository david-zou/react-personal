import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'

import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import Image from 'next/image'



export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd() + '/pages/blog/posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd() + '/pages/blog/posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const PostPage = ({ frontMatter: { title, date, thumbnailUrl }, mdxSource }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.blog_container}>
        <div className="text-center">
          <h1 className="underline p-1 text-5xl font-medium">{title}</h1>
          <div className="relative w-auto h-screen">
            <Image src={thumbnailUrl} layout="fill" objectFit="contain" alt=""/>
          </div>
          <p className="p-1 text-md font-semibold">{date}</p>
        </div>
        <div className="text-justify leading-loose p-10">
          <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
        </div> 
      </div>
      
    </div>
  )
}

export default PostPage

