import { MagikChartIcon } from 'components/icons/magik-chart-icon'
import { MagikCoinIcon } from 'components/icons/magik-coin-icon'
import { MagikShieldIcon } from 'components/icons/magik-shield-icon'
import { VFC } from 'react'
import { SingleFact } from './SingleFact'

const facts = [
  {
    Icon: MagikChartIcon,
    title: 'Transaction cost',
    numbers: '$0.01 - $0.30',
    description: (
      <>
        Borrow for free while we put your collateral to
        <br />
        work to generate yields to pay off the loan
      </>
    ),
  },
  {
    Icon: MagikCoinIcon,
    /** we need to scale up this SVG as it's very small due to most likely colorful shadow around it */
    iconClassName: 'scale-[2.75]',
    title: 'Yields',
    numbers: '7% - 12%',
    description: (
      <>
        Borrow for free while we put your collateral to
        <br />
        work to generate yields to pay off the loan
      </>
    ),
  },
  {
    Icon: MagikShieldIcon,
    /** besides scaling up this icon is also not centered properly so moving left a bit */
    iconClassName: 'scale-[2.75] -translate-x-2',
    title: 'All funds insured',
    numbers: '100%',
    description: (
      <>
        Borrow for free while we put your collateral to
        <br />
        work to generate yields to pay off the loan
      </>
    ),
  },
]

export const BottomPart: VFC = () => (
  <div className="flex flex-col px-6 md:max-w-7xl md:mx-auto">
    <div className="self-center py-2 text-xs font-medium text-center text-white border rounded-full border-light-border w-52">
      Whitelist now open
    </div>
    <div className="mt-8 text-3xl font-medium text-center text-white">
      Crypto loans that
      <br />
      repay itself
    </div>
    <div className="mt-4 text-sm text-center text-soft-font">
      Borrow for free while we put your collateral to
      <br />
      work to generate yields to pay off the loan
    </div>
    <div className="flex flex-col gap-8 mt-14">
      {facts.map(({ Icon, title, numbers, description, iconClassName }) => (
        <SingleFact
          key={title}
          Icon={Icon}
          iconClassName={iconClassName}
          title={title}
          numbers={numbers}
          description={description}
        />
      ))}
    </div>
    <div className="mt-24" />
  </div>
)
