import { SVGProps, VFC } from 'react'

export const ArrowUpIcon: VFC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.63339 2.97964L1.41736 9.19568L0.361108 8.13943L6.57714 1.92339L1.98705 1.59469C1.60212 1.56712 1.26774 1.23274 1.24017 0.847809C1.2126 0.462883 1.5023 0.173185 1.88723 0.200751L8.15996 0.649948C8.54488 0.677513 8.87927 1.0119 8.90684 1.39683L9.35604 7.66956C9.3836 8.05448 9.0939 8.34418 8.70898 8.31662C8.32405 8.28905 7.98966 7.95466 7.9621 7.56973L7.63339 2.97964Z"
      fill="currentColor"
    />
  </svg>
)
