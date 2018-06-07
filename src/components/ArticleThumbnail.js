import React from 'react'

const ArticleThumbnail = ({ article }) => {
  return (
    <div className="ArticleBlock" style={{ zIndex: article.id }}>
      <p className="ArticleSection">
        {article.section}
      </p>
      <p className="ArticleTitle">
        {article.title}
      </p>
      <p className="ArticleDate">
        {article.createdAt}
      </p>
    </div>
  )
}

export default ArticleThumbnail
