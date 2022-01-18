import clsx from 'clsx'
import Link from 'next/link'
import { VFC } from 'react'

import { LogoIcon } from 'components/icons/LogoIcon'

const productsLinks = [
  { label: 'Whitepaper', href: '#' },
  { label: 'Team', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Legal', href: '#' },
]

export const BottomNavigation: VFC<{ className?: string }> = ({
  className,
}) => (
  <div className={clsx('px-6 md:max-w-7xl md:mx-auto', className)}>
    <LogoIcon className="w-20" />
    <div className="mt-16 md:flex">
      <div className="text-5xl font-medium leading-tight text-white">
        Loans that
        <br />
        repay itself
      </div>
      <nav className="mt-14 md:mt-0 md:ml-32">
        <div className="font-bold text-white">Products</div>
        <ul className="mt-3">
          {productsLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} passHref={true}>
                <a className="block py-1 transition-colors text-soft-font hover:text-white">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="mt-16 text-sm text-soft-font md:mt-56">
      © {new Date().getFullYear()} Magik group
    </div>
  </div>
)
