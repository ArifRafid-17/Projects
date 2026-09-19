import {use} from 'react'
export default function Posts({postDataPromise}){
  const posts = use(postDataPromise);


  return (
    <>
       <div>
        <h2> Post: {posts.length} </h2>
       </div>



    </>
  )
}