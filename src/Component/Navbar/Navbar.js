import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'home', link: '/home' },
        { id: 2, name: 'shop', link: '/shop' },
        { id: 3, name: 'deals', link: '/seals' },
        { id: 4, name: 'coupons', link: '/coupons' },
        { id: 4, name: 'contact', link: '/contact' }
    ]
    return (
        <nav className='bg-orange-200'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-orange-200 w-full  duration-700 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        route={route}
                        key={route.id}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;