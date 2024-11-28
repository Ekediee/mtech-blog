import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="relative bg-main-bg dark:bg-main-dark-bg text-main-text border-b-2">
      <div className="container mx-auto md:flex md:justify-between items-center py-6 px-6 ">
        {/* Logo or Brand Name */}
        <div className="flex text-5xl md:text-3xl font-bold justify-center">
          <Link href="/">
            <h3>MTech</h3>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className='hidden md:block'>
          <ul className="flex space-x-6 text-xl">
            <li>
              <Link href="/">
                <p className="hover:text-main-link-hover">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:text-main-link-hover">About</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="hover:text-main-link-hover">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <p className="hover:text-main-link-hover">Resources</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar