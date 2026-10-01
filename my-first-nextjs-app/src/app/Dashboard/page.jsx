import React from 'react';
import UserCard from '../Components/user';

const DashboardPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div >
            <h1>Dashboard Page</h1>
            <div className ="grid grid-cols-3 gap-4 p-4">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};
export default DashboardPage;