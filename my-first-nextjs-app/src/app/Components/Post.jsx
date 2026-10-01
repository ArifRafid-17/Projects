import React from "react";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div  >
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <div className="text-sm text-muted-foreground">
            {post.description}
            {post.author && (
              <p className="text-sm text-muted-foreground">By {post.author}</p>
            )}
            {post.category && (
              <p className="text-xs text-muted-foreground">
                Category: {post.category}
              </p>
            )}
          </div>
          <div className="card-actions justify-end">
            <Link href={`/blogs/${post.id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
