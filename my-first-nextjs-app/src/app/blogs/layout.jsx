import React from 'react';

const BlogPageLayout = ({ children }) => {
    return (
        <>
            <h2>fixed portion</h2>

            <div>
                {children}
            </div>
        </>
    );
};

export default BlogPageLayout;