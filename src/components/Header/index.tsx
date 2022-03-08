import React from 'react'
import { Link } from '@tanstack/react-location'
import { IoIosStar } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <header className="h-full p-8">
      <div className="flex flex-nowrap items-center">
        <div className="flex-none">
          <Link to="/" className="relative logo oval-decoration">
            <span className="text-xl bg-cream dark:bg-black">
              K <IoIosStar className="inline pb-1"/> STAR
            </span>
          </Link>
        </div>
        <div className="flex-auto">

        </div>
        <div className="flex-none">
          <Link
            to="list"
            className="text-2xl inline-flex"
          >
            <IoSearchOutline title="Search"/>
          </Link>
        </div>
      </div>
    </header>
  )
}
