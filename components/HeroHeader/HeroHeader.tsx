import { ArrowUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useCallback, useEffect, useRef, VFC } from 'react'

import { BackdropLight } from 'components/BackDropLight'
import { ColorfulLayer } from 'components/ColorfulLayer'
import { NoiseLayer } from 'components/NoiseLayer'
import { SignUpForBetaForm } from 'components/SignUpForBetaForm'
import { SolanaIcon } from 'components/icons/SolanaIcon'

import { PerspectiveGrid } from './PerspectiveGrid'

const BuildOnSolanaBadge: VFC = () => (
  <div className="flex items-center gap-2 px-4 py-2 text-xs font-medium leading-none text-white bg-black border rounded-full md:px-6 md:text-sm border-light-border">
    <SolanaIcon className="w-4 h-auto md:w-6" />
    <span className="pt-0.5">Powered by Solana</span>
  </div>
)

export const HeroHeader: VFC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const perspectiveGridRef = useRef<SVGSVGElement>(null)

  /** zoom in perspective grid when scrolling down */
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      const perspectiveGrid = perspectiveGridRef.current
      if (!container || !perspectiveGrid) return

      const clientRect = container.getBoundingClientRect()

      if (
        typeof clientRect.height !== 'number' ||
        typeof clientRect.top !== 'number'
      )
        return

      const height = clientRect.height
      const howMuchNotScrolledUp =
        clientRect.top < 0 ? Math.max(height - clientRect.top * -1, 0) : height
      const portionScrolledUp = (height - howMuchNotScrolledUp) / height

      perspectiveGrid.style.transform = `scale(${1 + 0.5 * portionScrolledUp})`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full md:min-h-[925px] pb-24">
      <PerspectiveGrid
        ref={perspectiveGridRef}
        preserveAspectRatio="none"
        className="absolute w-full h-[440px] md:h-[925px] text-light-border -top-4 stroke-2 md:stroke-1 "
      />
      <BackdropLight className="-left-2 top-80 md:-left-40 md:-top-24 animate-random-movements" />
      <BackdropLight className="-right-2 -top-2 md:-right-40 md:top-[560px] animate-random-movements-2" />
      <BackdropLight className="hidden left-40 top-[760px] md:block animate-random-movements-3" />
      <NoiseLayer />
      <div className="relative md:mx-auto md:flex md:justify-between md:max-w-7xl">
        <div className="flex flex-col items-start p-6 md:pt-20">
          <BuildOnSolanaBadge />
          <div className="pt-4 text-5xl font-medium leading-tight text-white md:text-8xl">
            Magik
          </div>
          <div className="pt-6 text-2xl font-medium leading-tight text-white md:text-5xl md:leading-tight">
            Effortlessly grow your Defi
            <br />
            portfolio on Solana
          </div>
          <div className="pt-2 text-sm leading-relaxed text-white md:text-xl md:pt-10 md:leading-normal">
            Generate the highest yields available
            <br />
            and take out a free loan with your deposits
          </div>
          <Link href="https://app.magikfinance.xyz" passHref={true}>
            <a
              className="relative w-full mt-8 rounded-lg md:w-auto group md:mt-10"
              target="_blank"
              rel="noreferrer"
            >
              <ColorfulLayer className="transition-opacity opacity-0 blur-md rounded-2xl group-hover:opacity-60 group-focus:opacity-60" />
              <div className="absolute inset-0 rounded-lg bg-primary-accent" />
              <div className="relative flex items-center justify-center gap-2 py-3 text-sm font-medium text-center text-white md:text-base px-7">
                Launch App{' '}
                <ArrowUpIcon className="w-3 h-auto rotate-45 md:w-4" />
              </div>
            </a>
          </Link>
        </div>
        <SignUpForBetaForm className="p-6 mx-6 mt-24 md:py-11 md:px-16 md:mt-20" />
      </div>
    </div>
  )
}
