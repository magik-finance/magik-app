import { SVGProps, VFC } from 'react'

interface Props {
  Icon: VFC<SVGProps<SVGSVGElement>>
  title: string
  description: JSX.Element | string
}

export const SinglePro: VFC<Props> = ({ Icon, title, description }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-5 text-2xl font-bold text-white">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-accent">
        <Icon className="w-6 h-auto" />
      </div>
      {title}
    </div>
    <div className="mt-4 text-sm leading-relaxed text-soft-font md:text-base md:ml-10 md:pl-5 md:mt-3">
      {description}
    </div>
  </div>
)
