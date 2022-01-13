import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { LogoIcon } from 'components/logo-icon'
import { MenuIcon } from 'components/menu-icon'
import { XMarkIcon } from 'components/x-mark-icon'

const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'About', href: '#' },
]

export const TopNavigation = () => (
  <Popover as="header" className="relative">
    {({ open }) => (
      <>
        <div className="bg-main-background">
          <nav
            className="relative flex items-center justify-between h-14 px-6 mx-auto max-w-7xl border-b border-b-light-border sm:px-6"
            aria-label="Top Navigation"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Magik</span>
                  <LogoIcon className="w-auto h-5 sm:h-10" />
                </a>
                <div className="flex items-center -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-white bg-transparent rounded-md hover:bg-button-hover-background focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700"
              >
                Connect wallet
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-14 transition origin-top transform overflow-hidden bg-main-background md:hidden"
          >
            <div className="relative">
              <div
                style={{
                  position: 'absolute',
                  right: '-50px',
                  top: '-50px',
                  width: '137px',
                  height: '137px',
                  background: '#4E27B2',
                  opacity: '0.5',
                  filter: 'blur(150px)',
                  transform: 'matrix(0.71, -0.67, 0.75, 0.71, 0, 0)',
                }}
              />
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-soft-font rounded-md hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="px-5 mt-6">
                  <a
                    href="#"
                    className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
                  >
                    Connect wallet
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)
