"use client";

import React, { useContext } from 'react';
import { booksContext } from '@/src/Context/BooksContext';
import { BookType } from '../types';


const ListedBooksPage = () => {

    const {readBooks} = useContext(booksContext) as { readBooks: BookType[] };

    console.log("Read Books from Listed Books Page:", readBooks);
    
    return (
        <div>
            Listed Books Page
        </div>
    );
};

export default ListedBooksPage;