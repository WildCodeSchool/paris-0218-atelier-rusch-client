import React from 'react'
import './css/ArticleThumbnail.css'

const ArticleThumbnail = ({ article, index, className }) => {
  return (
    <div className={className} style={{ zIndex: index }} >
      <h6>
        {article.section}
      </h6>
      <h5>
        {article.title}
      </h5>
      <h6>
        {article.createdAt}
      </h6>
    </div>
  )
}

export default ArticleThumbnail
