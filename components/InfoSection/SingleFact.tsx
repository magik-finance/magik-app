import clsx from 'clsx'
import { HTMLProps, VFC } from 'react'

interface Props {
  Icon: VFC<HTMLProps<SVGSVGElement>>
  iconClassName?: string
  title: string
  numbers: string
  description: JSX.Element | string
}

export const SingleFact: VFC<Props> = ({
  Icon,
  iconClassName,
  title,
  numbers,
  description,
}) => (
  <div className="flex flex-col w-full p-6 border border-light-border rounded-2xl">
    <Icon className={clsx('self-center w-auto h-24 mt-8', iconClassName)} />
    <div className="mt-12 text-white">{title}</div>
    <div className="mt-3 text-3xl font-medium text-white">{numbers}</div>
    <div className="mt-5 text-xs leading-relaxed text-soft-font md:text-base md:ml-10 md:pl-5 md:mt-3">
      {description}
    </div>
  </div>
)
