import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-14 bg-purple-700 flex justify-between px-3 items-center text-white'>
      <div className="logo font-bold text-xl">
        <Link href="/">MinifyURL</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/qbout"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
