import React from 'react'
import { Link } from '@reach/router'
import api from '../api.js'
import IoAndroidDelete from 'react-icons/lib/io/android-delete'
import IoEdit from 'react-icons/lib/io/edit'

const ArticleCard = ({ article }) =>
  <div className='AdminCardFullWidth'>
    <div className='currentText' style={{ width: '40vw' }}>{article.title}</div>
    <div className='EditButtonsContainer'>
      <h6 style={{ marginRight: '50px' }}>{article.createdAt}</h6>
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

  return (
    <div className='GlobalContainer'>
      <Link to='new'>
        <div className='ButtonCreateElement'>Créer un nouvel article</div>
      </Link>
      <div className='AdminTitles yellow'>Articles de la section Projets :</div>
      {projetsArticlesList}
      <br/>
      <div className='AdminTitles yellow'>Articles de la section LabRusch :</div>
      {labArticlesList}
    </div>
  )
}

export default AdminArticles
