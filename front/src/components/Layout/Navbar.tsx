'use client';
import React, { useState } from 'react';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import NavItem from './NavItem';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='bg-white border-b border-gray-200 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 px-[5%] md:px-16 lg:px-20 xl:px-24 2xl:px-[200px]'>
      <div className='flex gap-2 text-[18px] lg:text-xl xl:text-2xl text-primary items-center'>
        <MdOutlineBusinessCenter />
        <span className='font-bold'>FinColombia</span>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row border-b border-gray-200 md:border-none px-4 md:px-0 pb-4 md:pb-0 md:items-center gap-4 absolute md:static bottom-0 translate-y-[105%] md:translate-y-0 left-0 w-full bg-white md:bg-transparent md:w-auto transition-all duration-300`}>
        <NavItem handleMenuToggle={handleMenuToggle} href='/products' label='Productos financieros' />
        <NavItem handleMenuToggle={handleMenuToggle} href='/simulator' label='Simulador' />
        <NavItem handleMenuToggle={handleMenuToggle} href='/onboarding' label='Unete' />
      </div>
      <div className='flex items-center gap-4 md:hidden'>
        <button className='text-gray-500 hover:text-gray-700 text-[20px]' onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;