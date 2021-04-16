import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName,matchAny = false, ...props } : any) => {
  let { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  asPath = matchAny ? asPath.split('/')[1] : asPath;
  const className =
    asPath === props.href || (matchAny && asPath.length>1 && props.href.includes(asPath))
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}


export default ActiveLink