import React from 'react'
import { Link } from '@reach/router'
import api from '../api.js'
import IoAndroidDelete from 'react-icons/lib/io/android-delete'
import IoEdit from 'react-icons/lib/io/edit'
import MdAdd from 'react-icons/lib/md/add-circle-outline'

const formatedDate = date => {
  const d = new Date(date)
  const jj = d.getDate()
  const mm = d.getMonth() + 1
  const yyyy = d.getFullYear()
  const hh = d.getHours()
  const min = d.getMinutes()
  const mmStr = mm.toString()
  const jjStr = jj.toString()
  const hhStr = hh.toString()
  const minStr = min.toString()
  return `${jj.length === 1 ? 0 + jjStr : jjStr}-${mmStr.length === 1 ? 0 + mmStr : mmStr}-${yyyy} ${hhStr.length === 1 ? 0 + hhStr : hhStr}:${minStr.length === 1 ? 0 + minStr : minStr}`
}
const ArticleCard = ({ article }) =>

  <div className='AdminCardFullWidth'>
    <div className='currentText' style={{ width: '40vw' }}>{article.title}</div>
    <div className='EditButtonsContainer'>
      <h6 style={{ marginRight: '50px' }}>{formatedDate(article.createdAt)}</h6>
      <Link to={String(article.id)}>
        <button className="ReactIcon">
          <IoEdit/>
        </button>
      </Link>
      <button className="ReactIcon" onClick={()=>{api.deleteArticle(article.id)
        window.location.reload()}}>
        <IoAndroidDelete/>
      </button>
      <button className={ article.hasStar === '1' ? 'hasStar' : 'hasNoStar' }>★</button>
    </div>
  </div>

const AdminArticles = ({ articles }) => {
  const projetsArticlesList = articles
  .filter(article => article.section === 'projets')
  .map(article => <ArticleCard key={article.id} article={article} />)

  const labArticlesList = articles
  .filter(article => article.section === 'lab')
  .map(article => <ArticleCard key={article.id} article={article} />)

  const draftArticlesList = articles
  .filter(article => article.section === 'draft')
  .map(article => <ArticleCard key={article.id} article={article} />)

  return (
    <div className='GlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateElement'><MdAdd className='ReactIconAdd' />Créer un nouvel article</div>
      </Link>
      <div className='AdminTitles yellow'>Articles de la section Projets :</div>
      {projetsArticlesList}
      <br/>
      <div className='AdminTitles yellow'>Articles de la section LabRusch :</div>
      {labArticlesList}
      <br/>
      <div className='AdminTitles yellow'>Articles de la section Brouillons :</div>
      {draftArticlesList}
    </div>
  )
}

export default AdminArticles
