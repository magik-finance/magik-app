import { VFC } from 'react'

import { GoldBarsIcon } from 'components/icons/gold-bars-icon'
import { SettingsSliderIcon } from 'components/icons/settings-slider-icon'
import { UsersIcon } from 'components/icons/users-icon'
import { SinglePro } from './SinglePro'
import Image from 'next/image'
import AppScreenMobileImage from './app-screen-mobile.png'

export const InfoSection: VFC = () => (
  <section className="relative flex flex-col px-6 bg-main-background">
    <div className="text-3xl font-medium text-white">
      Crypto loans that repay itself
    </div>
    <div className="mt-4 text-sm text-soft-font">
      Borrow for free while we put your collateral to work to generate yields to
      pay off the loan
    </div>
    <div className="flex flex-col gap-12 mt-12">
      <SinglePro
        Icon={UsersIcon}
        title="Better UX"
        description="Borrow for free while we put your collateral to work to generate yields to pay off the loan"
      />
      <SinglePro
        Icon={SettingsSliderIcon}
        title="Easy to manage"
        description="Borrow for free while we put your collateral to work to generate yields to pay off the loan"
      />
      <SinglePro
        Icon={GoldBarsIcon}
        title="Auto repaying loan"
        description="Borrow for free while we put your collateral to work to generate yields to pay off the loan"
      />
    </div>
    <div className="relative -mx-6 w-[351px] self-end mt-24">
      <Image
        src={AppScreenMobileImage}
        alt="App screen mobile version"
        layout="responsive"
      />
    </div>
    <div className="mt-24" />
  </section>
)
