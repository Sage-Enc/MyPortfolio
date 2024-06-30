import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/coding-sage-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/project' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-[#222327] font-SourceCodePro border-b-2 border-neutral-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center sm:w-1/3 md:w-2/5">
                  <img
                    className="w-28 cursor-pointer"
                    src={Logo}
                    alt="Coding-Sage-Logo"
                    onClick={()=>navigate("/")}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block sm:w-1/3 md:w-3/5">
                  <div className="flex space-x-4 ">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.href}
                        className={({isActive})=>
                          `${isActive ? 'text-white border-b-4 border-[#6343A3] h-12' : 'text-gray-300 hover:bg-gray-700 hover:text-white'},
                          'rounded-md md:px-1 lg:px-2 xl:px-4 py-2 text-sm lg:text-base xl:text-lg font-medium'`
                        }
                        // aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex-row">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={index}
                  as="nav"
                  onClick={()=>navigate(item.href)}
                  className={({isActive})=>
                    `${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'},
                    'block rounded-md px-3 py-2 text-base font-medium'`
                  }
                  // aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}