import { VFC } from 'react'

import { MagikChartIcon } from 'components/icons/MagikChartIcon'
import { MagikCoinIcon } from 'components/icons/MagikCoinIcon'
import { MagikShieldIcon } from 'components/icons/MagikShieldIcon'

import { SingleFact } from './SingleFact'

const facts = [
  {
    key: 0,
    Icon: MagikChartIcon,
    title: 'Beta',
    numbers: 'Magik Lending Vault',
    description: (
      <>
        We analyze the demand / supply balance of lending markets like Solend,
        Mango, Tulip, Apricot, Francium to construct the optimal portfolio to
        maximize returns
      </>
    ),
  },
  {
    key: 1,
    Icon: MagikCoinIcon,
    /** we need to scale up this SVG as it's very small due to most likely colorful shadow around it */
    iconClassName: 'scale-[2.75]',
    title: 'Beta',
    numbers: 'Magik Options Vault',
    description: (
      <>
        We access options markets like Friktion and Katana and dynamically
        redistribute deposits every epoch to the most attractive vault
      </>
    ),
  },
  {
    key: 2,
    Icon: MagikShieldIcon,
    /** besides scaling up this icon is also not centered properly so moving left a bit */
    iconClassName: 'scale-[2.75] -translate-x-2',
    title: 'Coming Soon',
    numbers: 'Magik Dual LP Vault',
    description: (
      <>
        We convert single-sided deposits into dual-sided LP tokens to collect
        fees from the best vaults on Saber, Mercurial Finance, and Orca
      </>
    ),
  },
]

export const BottomPart: VFC = () => (
  <div className="flex flex-col px-6 md:max-w-7xl md:mx-auto">
    <div className="self-center py-2 text-xs font-medium text-center text-white border rounded-full border-light-border w-52 md:text-sm md:w-auto md:px-6">
      Waitlist now open
    </div>
    <div className="mt-8 text-3xl font-medium text-center text-white md:text-7xl md:leading-tight">
      Magik creates
      <br />
      super vaults.
    </div>
    <div className="mt-4 text-sm text-center text-soft-font md:text-xl md:mt-6">
      You choose a strategy and let
      <br />
      our algorithms handle the rest.
    </div>
    <div className="flex flex-col gap-8 mt-14 md:flex-row md:gap-16 md:mt-24">
      {facts.map(
        ({ key, Icon, title, numbers, description, iconClassName }) => (
          <SingleFact
            key={key}
            Icon={Icon}
            iconClassName={iconClassName}
            title={title}
            numbers={numbers}
            description={description}
          />
        )
      )}
    </div>
    <div className="mt-24 md:mt-48" />
  </div>
)
