import { HTMLProps, VFC } from 'react'

const style = {
  background:
    'linear-gradient(142.36deg, #4E27B2 0.63%, #C300FF 30.14%, #B2278B 57.6%, #2799A1 98.78%, #4E27B2 132.42%)',
}

/**
 * You can place this element in the background of some other element
 * and if you add some blur you can get a colorful shadow effect
 */
export const ColorfulLayer: VFC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...otherProps
}) => (
  <div
    className={`absolute inset-0 ${className ?? ''}`.trim()}
    style={style}
    {...otherProps}
  />
)
