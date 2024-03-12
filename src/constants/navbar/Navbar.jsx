
import React from "react";
import '../../index.css';
import "../../App.css";

import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Podcasts' },
    { id: 3, text: 'Contact' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Subscribe' },
  ];

  return (
    <div className='bg-transparent flex justify-between items-center h-20 max-w-full mx-auto px-4 text-[#fff] font-roboto font-bold'>
      {/* Logo */}
      <h1 className='w-full text-4xl font-bold gradient-animation bg-gradient-to-r from-indigo-500 via-red-500 to-fuchsia-500 bg-clip-text text-transparent px-9'>NexCast . </h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
  {navItems.map(item => (
    <li
      key={item.id}
      className={`p-4 rounded-full m-2 cursor-pointer duration-400 ${item.text === 'Subscribe' ? 'bg-[#612897] text-white' : 'hover:bg-[#8E7AB5] hover:text-white'}`}
    >
      {item.text}
    </li>
  ))}
</ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[0%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>NexCast.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
          key={item.id}
          className={`p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 ${
            item.text === 'Subscribe' ? 'bg-[#C499F3]': ''
          }`}
        >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;