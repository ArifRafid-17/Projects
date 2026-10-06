"use client";

import React, { useContext } from 'react';
import { booksContext } from '@/src/Context/BooksContext';
import { BookType } from '../types';


const ListedBooksPage = () => {

    const {readBooks, wishlistBooks} = useContext(booksContext) as { readBooks: BookType[]; wishlistBooks: BookType[] };
    

    return (
        <div>
            Listed Books Page
        </div>
    );
};

export default ListedBooksPage;