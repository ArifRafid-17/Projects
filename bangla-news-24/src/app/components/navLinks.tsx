import Link from 'next/link';
import React from 'react';

interface Category {
    title: string;
    slug: string;
    scrapable: boolean;
}

interface CategoriesApiResponse {
    data: Category[];
}

const NavLinks = async () => {
    const res: Response = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data: CategoriesApiResponse = await res.json();
    const navs: Category[] = data.data.filter((n: Category) => n.scrapable);

    return (
        <div className='flex justify-center items-center gap-4 text-sm font-medium text-gray-700 py-1'>
            <Link href="/" className="hover:text-[#be1432] transition-colors py-1.5">
              হোম
            </Link>
            {navs.map((n: Category, i: number) => (
              <Link
                key={i}
                href={`/Category/${n.slug}`}
                className="hover:text-[#be1432] transition-colors py-1.5"
              >
                {n.title}
              </Link>
            ))}
        </div>
    );
};

export default NavLinks;