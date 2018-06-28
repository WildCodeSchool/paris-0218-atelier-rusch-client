import React from 'react'

const AnchorLink = ({title, href}) => {
  const anchor = `#${title}`
  return (
    <a href={anchor}>
      <p className="smallLink">{title}</p>
    </a>
  )
}

export default AnchorLink
