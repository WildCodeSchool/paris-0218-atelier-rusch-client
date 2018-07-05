import React from 'react'
import './css/ArticleThumbnail.css'
import { Link } from '@reach/router'

const ArticleThumbnail = ({ article, index }) => {
  return (
    <Link to={String(article.id)}>
      <div className='ArticleThumbnailClassic' 
      style={article.hasStar === 'true' ? { zIndex: index, background: `center / cover no-repeat url("${article.headerImage}"), rgba(0, 0, 0, 0.5)` } : { zIndex: index }}>
        <div className={article.hasStar === 'true' ? 'ArticleThumbnailFilterBlack ArticleThumbnailHasStar' : 'ArticleThumbnailClassic'}>
        <h6>
          {article.tags}
        </h6>
        <h5>
          {article.title}
        </h5>
        <h6>
          {article.createdAt}
        </h6>
        </div>
      </div>
    </Link>
  )
}

export default ArticleThumbnail
