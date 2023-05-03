import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
export const Navbar = () => {
  return (
    <nav>
    {menuItems.map(e=>(
        <ActiveLink text={e.text} href={e.href} />
    ))}
    
    </nav>
  )
}

export default Navbar
