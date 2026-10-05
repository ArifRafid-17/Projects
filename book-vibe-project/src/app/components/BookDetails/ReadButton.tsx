"use client";
import React, { useContext } from "react";
import { BookType } from "../../types";
import { booksContext } from "@/src/Context/BooksContext";
import { read } from "fs";

type ReadButtonProps = {
  book: BookType;
};

const ReadButton = ({ book }: ReadButtonProps) => {

  interface readBookType {
    readBooks: BookType[];
    setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  }  

  const { readBooks, setReadBooks } = useContext(booksContext) as readBookType;

  
  const handleReadBook = () => {
     setReadBooks([...readBooks, book]);
    console.log("Book marked as read!", book);
  };

  return (
    <button
      onClick={() => handleReadBook()}
      className="px-7 py-3 rounded-lg border border-gray-300 text-[#131313] font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
    >
      Read
    </button>
  );
};

export default ReadButton;
