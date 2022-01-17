import Image from 'next/image'
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
    title: 'Better UX',
    description: (
      <>
        Borrow for free while we put your collateral to
        <br />
        work to generate yields to pay off the loan
      </>
    ),
  },
  {
    Icon: SettingsSliderIcon,
    title: 'Easy to manage',
    description: (
      <>
        Borrow for free while we put your collateral to
        <br />
        work to generate yields to pay off the loan
      </>
    ),
  },
  {
    Icon: GoldBarsIcon,
    title: 'Auto repaying loan',
    description: (
      <>
        Borrow for free while we put your collateral to
        <br />
        work to generate yields to pay off the loan
      </>
    ),
  },
]

export const TopPart: VFC = () => (
  <div className="flex flex-col px-6 md:max-w-7xl md:mx-auto">
    <div className="text-3xl font-medium text-white md:text-7xl md:mt-24 md:leading-tight">
      Crypto loans that
      <br />
      repay itself
    </div>
    <div className="mt-4 text-sm text-soft-font md:text-xl">
      Borrow for free while we put your collateral to
      <br />
      work to generate yields to pay off the loan
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
        <Image
          src={AppScreenMobileImage}
          alt="App screen mobile version"
          layout="responsive"
        />
      </div>
      <div className="hidden relative w-[631px] h-[518px] md:block ml-6">
        <Image
          src={AppScreenDesktopImage}
          alt="App screen desktop version"
          layout="responsive"
        />
      </div>
    </div>
    <div className="mt-24 md:mt-60" />
  </div>
)
