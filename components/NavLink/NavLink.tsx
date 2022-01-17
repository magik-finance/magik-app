import {useRouter} from 'next/router';
import Link, {LinkProps} from 'next/link';
import React, {Children, FC} from 'react';

interface Props extends LinkProps {
  inactiveClassName?: string
  activeClassName?: string
}

/**
 * Like regular next.js Link but will toggle between activeClassName and inactiveClassName depending on if active
 */
export const NavLink: FC<Props> = ({
  children,
  inactiveClassName,
  activeClassName,
  ...props
}) => {
  const { asPath } = useRouter()
  const child = Children.only(children)

  const childClassName =
    typeof child === 'object' && 'props' in child ? child.props.className : ''

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : `${childClassName} ${inactiveClassName}`.trim()

  return (
    <Link {...props}>
      {typeof child === 'object' && 'props' in child
        ? React.cloneElement(child, {
            className: className || null,
          })
        : child}
    </Link>
  )
}
