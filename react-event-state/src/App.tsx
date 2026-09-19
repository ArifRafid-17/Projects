import { Suspense, useState } from 'react'
import './App.css'
import Cart from './Cart.tsx'
import Batter from './batter.tsx'
import Users from './Users.tsx'
import Posts from './Posts.tsx'
import Todos from './Todos.tsx'

const usersDataPromise = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}


const postDataPromise = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}


function App() {
  // function handleClick(){
  // alert ('button clicked')
  // }

  // const handleAddToCart=(id)=>{
  //   alert ('Buying Item', id)
  // } 

  return (
    <>
     {/* <button onClick={handleClick}> Click me </button>
     <button onClick={handleClick}>Click me 2</button> */}
     {/* <button onClick={handleAddToCart(65)}> Buy this</button>  bug */}
     {/* <button onClick={()=> handleAddToCart(65)}>Buy this</button> */}
     {/* <Cart></Cart>
     <Batter></Batter> */}
     
     {/* <Suspense fallback={<p>Loading....</p>}>
      <Users usersDataPromise = {usersDataPromise()}></Users>

     </Suspense> */}

     <Suspense fallback = {<p> Load hocchee...</p>}>
       <Posts postDataPromise ={postDataPromise()}> </Posts>
     </Suspense>
     

     <Todos> </Todos>
    </>
  )
}



export default App
