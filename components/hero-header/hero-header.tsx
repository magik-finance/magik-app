import { ArrowUpIcon } from '@heroicons/react/outline'
import { SolanaIcon } from 'components/icons/solana-icon'
import { NoiseLayer } from 'components/noise-layer'
import { PerspectiveGrid, PERSPECTIVE_GRID_RATIO } from './perspective-grid'

const HEIGHT = 4 * 110

export const BuildOnSolanaBadge = () => (
  <div className="flex items-center gap-2 px-4 py-2 text-xs font-medium leading-none text-white bg-black border rounded-full border-light-border">
    <SolanaIcon className="w-4 h-auto" />
    <span className="pt-0.5">Build on Solana Blockchain</span>
  </div>
)

export const HeroHeader = () => (
  <div className="relative w-full" style={{ height: HEIGHT }}>
    <PerspectiveGrid
      preserveAspectRatio="none"
      className="absolute w-full text-light-border"
      style={{
        height: HEIGHT,
      }}
      strokeWidth="2"
    />
    <div className="absolute w-32 h-32 rotate-45 -left-2 -bottom-2 bg-primary-accent blur-3xl opacity-80" />
    <div className="absolute w-32 h-32 rotate-45 -right-2 -top-2 bg-primary-accent blur-3xl opacity-80" />
    <NoiseLayer />
    <div className="absolute inset-0 flex flex-col items-start p-6">
      <BuildOnSolanaBadge />
      <div className="pt-4 text-6xl font-medium leading-tight text-white">
        Loans that repay itself
      </div>
      <div className="pt-2 text-sm leading-relaxed text-white">
        Borrow for free while we put your collateral to work to generate yields
        to pay off the loan
      </div>
      <div className="flex items-center justify-center w-full gap-2 py-3 mt-8 font-medium text-center text-white rounded-lg bg-primary-accent">
        Download whitepaper <ArrowUpIcon className="w-3 h-3 rotate-45" />
      </div>
    </div>
  </div>
)
