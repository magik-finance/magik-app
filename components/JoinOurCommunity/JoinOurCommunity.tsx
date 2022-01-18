import Link from 'next/link'

import { DiscordIcon } from 'components/icons/DiscordIcon'
import { GitHubIcon } from 'components/icons/GitHubIcon'
import { TelegramIcon } from 'components/icons/TelegramIcon'
import { TwitterIcon } from 'components/icons/TwitterIcon'

const icons = [
  { name: 'Discord', Icon: DiscordIcon, href: '#' },
  { name: 'Telegram', Icon: TelegramIcon, href: '#' },
  { name: 'GitHub', Icon: GitHubIcon, href: '#' },
  { name: 'Twitter', Icon: TwitterIcon, href: '#' },
]

export const JoinOurCommunity = () => (
  <div className="px-6 mb-24 md:mx-auto md:max-w-7xl">
    <div className="py-4 border-t border-b md:py-6 border-light-border md:flex md:justify-between md:items-center">
      <div className="text-3xl font-medium text-white md:text-5xl">
        Join our{' '}
        <span className="md:hidden">
          <br />
        </span>
        community
      </div>
      <div className="flex gap-2 mt-4 -mx-3 md:mt-0">
        {icons.map(({ name, Icon, href }) => (
          <Link key={name} href={href} passHref={true}>
            <a
              title={name}
              target="_blank"
              className="block px-3 py-2 transition-colors text-soft-font hover:text-white"
            >
              <Icon className="w-7 h-7" />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
)
