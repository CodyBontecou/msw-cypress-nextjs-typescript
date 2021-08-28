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
  const posts: Post[] = await res.json()

  if (!posts) {
    return {
      props: { notFound: true },
    }
  }

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

export default function Home(props: Props) {
  if (props.notFound) {
    return <>Error</>
  } else if (props.posts) {
    return (
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  } else {
    return <>Idk what happened</>
  }
}

Home.Layout = Layout
