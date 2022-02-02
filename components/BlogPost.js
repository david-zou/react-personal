import Link from 'next/link'
import Image from 'next/image'

import { connect } from 'react-redux'

function BlogPost({ post, index }) {
  return (
    <div className="flex bg-white shadow-md border border-gray-200 rounded-lg mb-5" key={index}>
      <div className={`${post.frontMatter.thumbnailUrl ? "w-3/4" : ""} p-5`}>
          <Link href={'/blog/' + post.slug} passHref>
            <a>
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.frontMatter.title}</h5>
            </a>
          </Link>
          <p className="font-normal text-gray-700 mb-3 line-clamp-3">{post.frontMatter.description}</p>
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
  return
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)