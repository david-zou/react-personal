import React, { useEffect, useState, Fragment } from "react"
import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'
import { useTheme } from "next-themes"

function MenuLink(props) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export default function NavMenu() {
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
    <div
      className="p-2 rounded-md hover:bg-blue-400 text-white lg:hidden"
    >
      <Menu>

        <Menu.Button>
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
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-3 w-56 px-1 py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
              <Menu.Item>
                {({ active }) => (
                  <MenuLink
                    href='/portfolio'
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    }  flex justify-end rounded-md items-center px-2 py-2 text-sm`}
                  >
                    Portfolio
                  </MenuLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MenuLink
                    href='/gallery'
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    }  flex justify-end rounded-md items-center px-2 py-2 text-sm`}
                  >
                    Gallery
                  </MenuLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MenuLink
                    href='/about'
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    }  flex justify-end rounded-md items-center px-2 py-2 text-sm`}
                  >
                    About
                  </MenuLink>
                )}
              </Menu.Item>
              <Menu.Item>
                <div className="flex justify-end">
                  <button
                      aria-label="Theme Toggle"
                      type="button"
                      className="inline-flex group text-gray-900 text-center text-sm hover:bg-violet-500 py-2 ml-2 rounded"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      <span
                        className=" group-hover:text-white mx-2"
                      >
                        {theme === "dark" ? "(Dark Mode Enabled)" : "(Light Mode Enabled)"}  
                      </span>
                      <div>
                      {mounted && (
                        <svg
                          className="inline-flex w-6 h-6 fill-black group-hover:invert"
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
              </Menu.Item>
          </Menu.Items>
        </Transition>

      </Menu>
    </div>
  );
}