import React from 'react'
import './css/ArticleThumbnail.css'

const ArticleThumbnail = ({ article, index }) => {
  return (
    <div className="ArticleThumbnail" style={{ zIndex: index }} >
      <h6 className="yellow">
        {article.section}
      </h6>
      <h5 className="darkgrey">
        {article.title}
      </h5>
      <h6 className="yellow">
        {article.createdAt}
      </h6>
    </div>
  )
}

export default ArticleThumbnail
