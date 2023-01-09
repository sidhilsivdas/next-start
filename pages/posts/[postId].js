import { useRouter } from 'next/router';
function Post({ post }){
   const router = useRouter();
   if(router.isFallback){
     return <><p>Loading...</p></>
   }
   return (
    <>
      <h1>{post.id} - {post.title}</h1>
      <p>{post.body}</p>
    </>
   );
}

export default Post;

export async function getStaticPaths() {
      
  const paths = [
    { params: {postId: '1'} },
    { params: {postId: '2'} }
  ]

  return { paths, fallback: true }
}

export async function getStaticProps(context){
  const { params } = context;
  const postId = params.postId;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  if(!data.id){
    return {
      notFound : true
    }
  }

  return {
    props: {
        post: data
    }
  }
}