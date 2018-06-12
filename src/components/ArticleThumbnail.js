import React from 'react'
import './css/ArticleThumbnail.css'

const ArticleThumbnail = ({ article, index }) => {
  return (
    <div className="ArticleThumbnail" style={{ zIndex: index }} >
      <p className="ArticleSection">
        {article.section}
      </p>
      <h3 className="ArticleTitle">
        {article.title}
      </h3>
      <p className="ArticleDate">
        {article.createdAt}
      </p>
    </div>
  )
}

export default ArticleThumbnail
