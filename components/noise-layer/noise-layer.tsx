import { HTMLProps, VFC } from 'react'
import NoiseImage from './noise.png'

/**
 * It's a decoration layer that will cover outer container with a semi-transparent image of a noise
 */
export const NoiseLayer: VFC<HTMLProps<HTMLDivElement>> = (
  className,
  ...otherProps
) => (
  <div
    className={`absolute inset-0 bg-repeat ${className}`}
    style={{
      backgroundImage: `url(${NoiseImage.src})`,
    }}
    {...otherProps}
  />
)
