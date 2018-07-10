import React from 'react'
import './css/ArticleThumbnail.css'
import { Link } from '@reach/router'

const ArticleThumbnail = ({ article, index }) => {
  const formatedDate = date => {
    const d = new Date(date)
    const jj = d.getDate()
    const mm = d.getMonth()
    const yyyy = d.getFullYear()
    const hh = d.getHours()
    const min = d.getMinutes()
    return`${jj} - ${mm} - ${yyyy}`
  }
  return (
    <Link to={String(article.id)}>
      <div className='ArticleThumbnailClassic'
      style={article.hasStar === '1' ? { zIndex: index, background: `center / cover no-repeat url("${article.headerImage}"), rgba(0, 0, 0, 0.5)` } : { zIndex: index }}>
        <div className={article.hasStar === '1' ? 'ArticleThumbnailFilterBlack ArticleThumbnailHasStar' : 'ArticleThumbnailClassic'}>
        <h6>
          {article.tags}
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
