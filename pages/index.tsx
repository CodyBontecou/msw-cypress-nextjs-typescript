import { Layout } from '@components/common'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface Props {
  posts?: Post[]
  notFound?: boolean
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  console.log(res)

  if (!posts) {
    return {
      props: { notFound: true },
    }
  }

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

export default function Home({ posts }: { posts: Post[] }) {
  if (!posts) {
    return <>Error</>
  } else if (posts) {
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  } else {
    return <>Idk what happened</>
  }
}

Home.Layout = Layout
