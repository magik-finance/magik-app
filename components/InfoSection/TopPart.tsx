import { VFC } from 'react'

import { GoldBarsIcon } from 'components/icons/GoldBarsIcon'
import { SettingsSliderIcon } from 'components/icons/SettingsSliderIcon'
import { UsersIcon } from 'components/icons/UsersIcon'

import { SinglePro } from './SinglePro'
import AppScreenDesktopImage from './app-screen-desktop.png'
import AppScreenMobileImage from './app-screen-mobile.png'

const pros = [
  {
    Icon: UsersIcon,
    title: 'Dynamic vaults',
    description: (
      <>
        Choose one of three vault strategies.
        <br />
        Sit back and relax while Magik scans
        <br />
        the ecosystem for the best yields.
      </>
    ),
  },
  {
    Icon: SettingsSliderIcon,
    title: 'Loans that repay itself',
    description: (
      <>
        Borrow for free while we put your deposit to
        <br />
        work to auto-repay your loan balance over-time.
      </>
    ),
  },
  {
    Icon: GoldBarsIcon,
    title: 'Magik is backed',
    description: (
      <>
        A portion of revenues will be distributed to
        <br />
        Magik stakers (sMGK), backing the native token
        <br />
        with cash flow which scales with TVL.
      </>
    ),
  },
]

export const TopPart: VFC = () => (
  <div className="flex flex-col px-6 md:max-w-7xl md:mx-auto">
    <div className="text-3xl font-medium text-white md:text-7xl md:mt-24 md:leading-tight">
      Complex defi strategies,
      <br />
      simplified.
    </div>
    <div className="mt-4 text-sm text-soft-font md:text-xl">
      Magik is the all-in-one platform
      <br />
      to manage your portfolio on Solana.
    </div>
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col gap-12 mt-12 md:gap-11">
        {pros.map(({ Icon, title, description }) => (
          <SinglePro
            key={title}
            Icon={Icon}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="relative -mx-6 w-[351px] self-end mt-24 md:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AppScreenMobileImage.src} alt="App screen mobile version" />
      </div>
      <div className="hidden relative w-[631px] h-[518px] md:block ml-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AppScreenDesktopImage.src} alt="App screen desktop version" />
      </div>
    </div>
    <div className="mt-24 md:mt-60" />
  </div>
)
