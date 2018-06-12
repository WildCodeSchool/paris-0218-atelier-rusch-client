import React from 'react'
import './css/ArticleThumbnail.css'

const ArticleThumbnail = ({ article, index }) => {
  return (
    <div className="ArticleBlock" style={{ zIndex: index }} >

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
