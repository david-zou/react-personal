import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
        <div className="sticky top-0"> { /* Enable fixed top menu */ }
          <nav className='flex items-center flex-wrap bg-sky-600 p-3'>
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current text-white h-8 w-8 mr-2'
              >
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
              </svg>
              <span className='text-xl text-white font-bold uppercase tracking-wide'>
                David Z.
              </span>
            </a>
          </Link>
          <button 
            className=' inline-flex p-3 hover:bg-blue-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
            >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className={`${ active ? '' : 'hidden' } w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white '>
                  Home
                </a>
              </Link>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white'>
                  Portfolio
                </a>
              </Link>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white'>
                  Gallery
                </a>
              </Link>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-400 hover:text-white'>
                  About
                </a>
              </Link>
              <button
                aria-label="Theme Toggle"
                id="theme-toggle"
                type="button"
                className="hover:bg-blue-400 text-white font-bold py-2 px-4 m-2 rounded"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <div>
                {mounted && (
                  <svg
                    id="theme-toggle-light-dark-icon"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {theme === "dark" ? (
                      <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                      ></path>
                    ) : (
                      <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      ></path>
                    )}
                  </svg>
                )}
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
  );
}