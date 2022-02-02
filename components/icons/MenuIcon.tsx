import { SVGProps, VFC } from 'react'

export const MenuIcon: VFC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 28 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="28" height="1" fill="currentColor" />
    <rect y="4" width="28" height="1" fill="currentColor" />
    <rect y="8" width="28" height="1" fill="currentColor" />
  </svg>
)
