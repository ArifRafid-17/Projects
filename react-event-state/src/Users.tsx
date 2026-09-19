import {use} from "react"
import UserCard from "./UserCard";

function Users ({usersDataPromise}){

    const users = use (usersDataPromise);
    console.log(users);
    return(
        <>
        <div>
            <h2> Users: {users.length}</h2>
            {
                users.map(user=> <UserCard user={user}> </UserCard>)
            }

        </div>
        </>
    )
}


export default Users;


/**
 * 1. Suspense Fallback 
 * 2. create a promise function to load data
 * 3. send the promise to the component to load data 
 * 
 * 
 * 
 * 
 * 
*/