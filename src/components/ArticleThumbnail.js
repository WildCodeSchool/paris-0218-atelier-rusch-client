import React from 'react'
import './css/ArticleThumbnail.css'

const ArticleThumbnail = ({ article }) => {
  return (
    <div className="ArticleBlock" style={{ zIndex: article.id }}>

      <div className="ArticleSectionAndTitle">
        <p className="ArticleSection">
          {article.section}
        </p>
        <p className="ArticleTitle">
          {article.title}
        </p>
      </div>

      <p className="ArticleDate">
        {article.createdAt}
      </p>

    </div>
  )
}

export default ArticleThumbnail
