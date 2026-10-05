import Link from "next/link";


export default function Navbar() {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg hover:bg-[#23BE0A]/10 transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/listed-books"
          className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 transition-colors"
        >
          Listed Books
        </Link>
      </li>
      <li>
        <Link
          href="/pages-to-read"
          className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 transition-colors"
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <header className="w-full bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile menu dropdown */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} role="button" className="btn btn-ghost p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-box w-52 gap-2"
            >
              {links}
            </ul>
          </div>

          <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-[#131313]">
            Book Vibe
          </Link>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-4 list-none m-0 p-0">
          {links}
        </ul>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base bg-[#23BE0A] hover:bg-[#1fa308] transition-colors inline-flex items-center justify-center"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2.5 sm:px-7 sm:py-3 rounded-lg text-white font-semibold text-sm sm:text-base bg-[#59C6D2] hover:bg-[#48b5c1] transition-colors inline-flex items-center justify-center"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}