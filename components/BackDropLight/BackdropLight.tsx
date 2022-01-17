import { VFC } from 'react'

/**
 * Place this element in the background to get an effect of some soft light
 */
export const BackdropLight: VFC<{ className: string }> = ({ className }) => (
  <div
    className={`absolute w-32 h-32 md:w-96 md:h-96 rotate-45 bg-primary-accent blur-3xl opacity-80 md:opacity-40 ${className}`}
  />
)
