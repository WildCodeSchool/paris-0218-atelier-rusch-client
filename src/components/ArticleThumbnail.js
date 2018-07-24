import React from 'react'
import './css/ArticleThumbnail.css'
import { Link } from '@reach/router'

const ArticleThumbnail = ({ article, index }) => {

  const parentContextPath = window.location.pathname.replace(/\/\d+$/, '')

  const articleId = String(article.id)

  const articleSection = String(article.section)

  return (
    <Link
      to={`/${articleSection}/${articleId}`}
      onClick={() => document.getElementById("scrollToTop").scrollIntoView()}>
      <div className='ArticleThumbnailClassic'
      style={article.hasStar === '1' ? { zIndex: index, background: `center / cover no-repeat url("${article.headerImage}"), rgba(0, 0, 0, 0.5)` } : { zIndex: index }}>
        <div className={(article.hasStar === '1' && window.location.pathname !== '/') ? 'ArticleThumbnailFilterBlack ArticleThumbnailHasStar' : 'ArticleThumbnailClassic'}>
        <h6>
          {article.tags.join(' - ')}
        </h6>
        <h5>
          {article.title}
        </h5>
        <h6>
          {`${article.date.slice(-2)}.${article.date.slice(5, 7)}.${article.date.slice(0, 4)}`}
        </h6>
        </div>
      </div>
    </Link>
  )
}

export default ArticleThumbnail
