import { HTMLProps, VFC } from 'react'

interface SingleProProps {
  Icon: VFC<HTMLProps<SVGSVGElement>>
  title: string
  description: string
}

export const SinglePro: VFC<SingleProProps> = ({
  Icon,
  title,
  description,
}) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-5 text-2xl font-bold text-white">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-accent">
        <Icon className="w-6 h-auto" />
      </div>
      {title}
    </div>
    <div className="mt-4 text-sm leading-relaxed text-soft-font">
      {description}
    </div>
  </div>
)
