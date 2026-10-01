import React from "react";
import Link from "next/link";

const UserCard = ({ user }) => {

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{user.name}</h2>
       {/* <div>
            <p className="text-sm text-muted-foreground">Email: {user.email}</p>
            <p className="text-sm text-muted-foreground">Phone: {user.phone}</p>
            <p className="text-sm text-muted-foreground">Website: {user.website}</p>
        </div> */}
        <div className="card-actions justify-end">
        <Link href={`/Dashboard/${user.id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
