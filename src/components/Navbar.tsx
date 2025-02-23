import { useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../utils/styles/styles';
import { Link } from 'react-router-dom';
import { d_navLinks } from '../data/navBar';

import avatar from '../assets/avatar.jpg';
import menu from '../assets/icons/menu.svg';

function Navbar (){
    const [menuToggle, setmenuToggle] = useState(false);

    return (
        <>
            <nav className={`absolute top-0 z-10 w-full px-10 py-4 bg-black flex items-center justify-between shadow-xl`}>
                
                {/* Avatar */}
                <Link to='/' className='flex items-center gap-10'>
                    <img src={avatar} alt="avatar" className='w-12 h-12 object-contain rounded-2xl'/>
                    <p className='text-white font-bold text-2xl flex'> Alvin&nbsp;
                        <span className='md:block hidden'> | Linermao</span>
                    </p>
                </Link>

                {/* NavLinks */}
                <>
                    {/* for PC */}
                    <NavLinks />

                    {/* for Mobile */}
                    <div className='sm:hidden flex justify-center items-center'>
                        <img src={menu} alt="menu" className='relative w-7 h-7 cursor-pointer'
                            onClick={() => setmenuToggle(!menuToggle)}
                        />

                        <div className={`${menuToggle ? "flex" : "hidden"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                            <NavLinks isMobile={true} />
                        </div>
                    </div>
                </>
            </nav>
        </>
    )
}

function NavLinks( {isMobile=false} ){
    const [menuActive, setMenuActive] = useState("Home");

    return (
        <>
            <ul className={`list-none ${isMobile? "flex flex-col" : "sm:flex hidden flex-row" } gap-10`}>
                { d_navLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`${isMobile? "text-xl" : "text-2xl" } ${menuActive === link.title ? "text-white" : "text-gray-400"} font-bold hover:text-white cursor-pointer`}
                        onClick={() => setMenuActive(link.title)}
                    >
                        <Link to={link.link}>
                            {link.title}
                        </Link>
                    </li>
                )) }
            </ul>
        </>
    )
}

export default Navbar;