import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { LogoIcon } from 'components/icons/logo-icon'
import { MenuIcon } from 'components/icons/menu-icon'
import { XMarkIcon } from 'components/icons/x-mark-icon'
import { NavLink } from 'components/nav-link'
import NoiseImage from './noise.png'
import Link from 'next/link'
import { DiscordIcon } from 'components/icons/discord-icon'
import { TelegramIcon } from 'components/icons/telegram-icon'
import { GitHubIcon } from 'components/icons/git-hub-icon'
import { TwitterIcon } from 'components/icons/twitter-icon'

const navigation = [
  { name: 'Home', href: '/' },
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
                  <LogoIcon className="w-auto h-6 sm:h-10" />
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
            style={{ height: 4 * 110 }}
            className="absolute inset-x-0 top-14 transition origin-top transform overflow-hidden bg-main-background md:hidden"
          >
            <div className="bg-primary-accent -top-16 -right-4 absolute w-36 h-36 opacity-50 blur-3xl rotate-45" />
            <div
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url(${NoiseImage.src})`,
              }}
            />
            <div className="absolute inset-0 p-12">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    passHref={true}
                    activeClassName="text-white"
                    inactiveClassName="text-soft-font"
                  >
                    <a className="block px-3 py-2 text-2xl font-medium rounded-md hover:text-white">
                      {item.name}
                    </a>
                  </NavLink>
                ))}
              </div>
              <div className="flex mt-8">
                <Link href="#" passHref={true}>
                  <a className="block px-3 py-2 text-soft-font hover:text-white">
                    <DiscordIcon className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="#" passHref={true}>
                  <a className="block px-3 py-2 text-soft-font hover:text-white">
                    <TelegramIcon className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="#" passHref={true}>
                  <a className="block px-3 py-2 text-soft-font hover:text-white">
                    <GitHubIcon className="w-5 h-5" />
                  </a>
                </Link>
                <Link href="#" passHref={true}>
                  <a className="block px-3 py-2 text-soft-font hover:text-white">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </Link>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)
