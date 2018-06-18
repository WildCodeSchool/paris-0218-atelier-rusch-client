import React from 'react'
import './css/ArticleThumbnail.css'
import './css/SectionTitleBlock.css'

const SectionTitleBlock = ({ message }) =>
  <div className="SectionTitleBlock FilterBlack">
    <div className="SectionTitleBlock SectionPic">
      <h1 className="green">{message}</h1>
    </div>
  </div>

export default SectionTitleBlock
