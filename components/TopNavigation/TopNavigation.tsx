import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, VFC } from 'react'

import { NavLink } from 'components/NavLink'
import { NoiseLayer } from 'components/NoiseLayer'
import { DiscordIcon } from 'components/icons/DiscordIcon'
import { GitHubIcon } from 'components/icons/GitHubIcon'
import { LogoIcon } from 'components/icons/LogoIcon'
import { MenuIcon } from 'components/icons/MenuIcon'
import { TelegramIcon } from 'components/icons/TelegramIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'
import { XMarkIcon } from 'components/icons/XMarkIcon'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: 'https://app.magikfinance.xyz' },
  { name: 'Docs', href: '#' },
  { name: 'About', href: '#' },
]

const icons = [
  { name: 'Discord', Icon: DiscordIcon, href: '#' },
  { name: 'Telegram', Icon: TelegramIcon, href: '#' },
  { name: 'GitHub', Icon: GitHubIcon, href: '#' },
  { name: 'Twitter', Icon: TwitterIcon, href: '#' },
]

export const TopNavigation: VFC = () => (
  <Popover as="header" className="relative">
    {({ open }) => (
      <>
        <div className="h-14" />
        <div className="fixed top-0 left-0 z-10 w-full border-b bg-main-background border-b-light-border md:absolute">
          <nav
            className="relative flex items-center justify-between px-6 mx-auto h-14 max-w-7xl md:px-6"
            aria-label="Top Navigation"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Magik</span>
                  <LogoIcon className="w-auto h-6" />
                </a>
                <div className="flex items-center -mr-2 md:hidden">
                  {open ? (
                    <button className="inline-flex items-center justify-center p-2 text-white bg-transparent rounded-md hover:bg-button-hover-background focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Close main menu</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  ) : (
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-white bg-transparent rounded-md hover:bg-button-hover-background focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  )}
                </div>
              </div>
              <div className="hidden space-x-1 ml-14 md:flex">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-2 py-3 text-sm font-bold text-white transition-colors hover:text-primary-accent-light"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-1">
              {icons.map(({ name, Icon, href }) => (
                <Link key={name} href={href} passHref={true}>
                  <a
                    title={name}
                    target="_blank"
                    className="block px-1 py-2 text-white transition-colors hover:text-primary-accent-light"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                </Link>
              ))}
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
            className="fixed inset-x-0 h-[440px] z-10 mt-px overflow-hidden transition origin-top transform border-b top-14 bg-main-background border-b-light-border md:hidden"
          >
            <div className="absolute rotate-45 opacity-50 bg-primary-accent -top-16 -right-4 w-36 h-36 blur-3xl" />
            <NoiseLayer />
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
                    <a className="block px-3 py-2 text-2xl font-medium transition-colors rounded-md hover:text-white">
                      {item.name}
                    </a>
                  </NavLink>
                ))}
              </div>
              <div className="flex mt-8">
                {icons.map(({ name, Icon, href }) => (
                  <Link key={name} href={href} passHref={true}>
                    <a
                      title={name}
                      target="_blank"
                      className="block px-3 py-2 transition-colors text-soft-font hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)
