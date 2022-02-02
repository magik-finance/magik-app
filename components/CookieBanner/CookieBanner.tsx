import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useCallback, useEffect, useState, VFC } from 'react'

import { ColorfulLayer } from 'components/ColorfulLayer'
import { CookieIcon } from 'components/icons/CookieIcon'
import { useLocalStorage } from 'utils/use-local-storage'

const SHOW_BANNER_DELAY_MS = 1000

export const CookieBanner: VFC = () => {
  const [isLoadedInBrowser, setIsLoadedInBrowser] = useState(false)
  const [cookieConsent, setCookieConsent] = useLocalStorage(
    'cookieConsent',
    false
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timeout = setTimeout(
        () => setIsLoadedInBrowser(true),
        SHOW_BANNER_DELAY_MS
      )

      return () => clearTimeout(timeout)
    }
  }, [])

  const isBannerShown = isLoadedInBrowser && !cookieConsent

  const handleAcceptCookiesClick = useCallback(() => {
    setCookieConsent(true)
  }, [setCookieConsent])

  return (
    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      show={isBannerShown}
    >
      <div className="fixed bottom-0 left-0 w-full text-white shadow-[0_0_60px_0_rgba(0,0,0,1)] bg-primary-accent">
        <div className="px-6 py-8 md:pt-16 md:pb-12 md:max-w-7xl md:mx-auto md:flex md:items-start">
          <div className="flex items-center gap-2 text-3xl font-bold">
            <CookieIcon className="w-14 h-14" /> You like a cookie?
          </div>
          <div className="md:ml-48 md:mt-2">
            <div className="mt-3 text-xs font-medium md:text-base">
              We use cookies to make our site work and also for analytics and
              <span className="hidden md:inline">
                <br />
              </span>
              advertising purposes. You can enable or disable optional cookies
              as
              <span className="hidden md:inline">
                <br />
              </span>
              desired. See our{' '}
              <Link href="#" passHref={true}>
                <a className="font-bold">Cookie Policy</a>
              </Link>{' '}
              for more details.
            </div>
            <button
              className="relative w-full mt-6 rounded-lg group md:w-64"
              type="button"
              onClick={handleAcceptCookiesClick}
            >
              <ColorfulLayer className="-m-1 transition-opacity rounded-lg opacity-0 pointer-events-none blur-md group-hover:opacity-60 group-focus:opacity-60" />
              <div className="relative py-3 font-medium text-center rounded-lg bg-main-background">
                Accept all cookies
              </div>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}
