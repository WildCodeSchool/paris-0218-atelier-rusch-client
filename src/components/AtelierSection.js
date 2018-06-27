import React from 'react'
// import './css/Atelier.css'

const AtelierSection = ({ index, children, title, bgColor }) => {
  return (
    <div className="AtelierSection" style={{backgroundColor: `${bgColor}`}}>
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default AtelierSection
