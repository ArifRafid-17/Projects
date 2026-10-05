import React, { useContext } from "react";
import { BookType } from "../../types";
import { booksContext } from "@/src/Context/BooksContext";



interface WishButtonProps {
    book: BookType;
  }
const WishButton = ({ book }: WishButtonProps) => {

    const { wishlistBooks, setWishlistBooks } = useContext(booksContext) as { wishlistBooks: BookType[]; setWishlistBooks: React.Dispatch<React.SetStateAction<BookType[]>> };

    const handleWishlistBook = () => {
        setWishlistBooks([...wishlistBooks, book]);
    }

  return (
    <button
    onClick = {
        ()=> handleWishlistBook()
    } 
    className="px-7 py-3 rounded-lg bg-[#59C6D2] text-white font-semibold hover:bg-[#48b5c1] transition-colors cursor-pointer">
      Wishlist
    </button>
  );
};

export default WishButton;
