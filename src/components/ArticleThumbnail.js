import React from 'react'
import './css/ArticleThumbnail.css'
import { Link } from '@reach/router'

const ArticleThumbnail = ({ article, index }) => {

  const formatedDate = date => {
    const d = new Date(date)
    const jj = d.getDate()
    const mm = d.getMonth() + 1
    const yyyy = d.getFullYear()
    const mmStr = mm.toString()
    const jjStr = jj.toString()
    return `${jj.length === 1 ? 0 + jjStr : jjStr}-${mmStr.length === 1 ? 0 + mmStr : mmStr}-${yyyy}`
  }

  const parentContextPath = window.location.pathname.replace(/\/\d+$/, '')

  const articleId = String(article.id)

  return (
    <Link
      to={window.location.pathname.includes('homepage')
      ? String(article.id)
      : `${parentContextPath}/${articleId}`}
      onClick={() => document.getElementById("scrollToTop").scrollIntoView()}>
      <div className='ArticleThumbnailClassic'
      style={article.hasStar === '1' ? { zIndex: index, background: `center / cover no-repeat url("${article.headerImage}"), rgba(0, 0, 0, 0.5)` } : { zIndex: index }}>
        <div className={article.hasStar === '1' ? 'ArticleThumbnailFilterBlack ArticleThumbnailHasStar' : 'ArticleThumbnailClassic'}>
        <h6>
          {article.tags.join(' - ')}
        </h6>
        <h5>
          {article.title}
        </h5>
        <h6>
          {formatedDate(article.createdAt)}
        </h6>
        </div>
      </div>
    </Link>
  )
}

export default ArticleThumbnail
