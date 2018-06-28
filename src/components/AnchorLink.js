import React from 'react'

const AnchorLink = ({title, href}) =>
  <a href={href}>
  <p className="smallLink">{title}</p>
  </a>

export default AnchorLink
