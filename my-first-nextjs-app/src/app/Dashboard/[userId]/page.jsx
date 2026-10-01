import React from 'react';

const UserDetailPage = async({params}) => {
    const {userId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();

    return (
        <div>
            <h2>User Detail Page</h2>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserDetailPage;