const getArticles = () => fetch('/articles').then(res => res.json())

const getFilters = () => fetch('/filters').then(res => res.json())

const getEquipe = () => fetch('/equipe').then(res => res.json())

const newFilter = filter => fetch('/filtres', {
  method: 'post',
  body: JSON.stringify(filter),
  headers: {
    'Content-Type': 'application/json'
  }
})

const updateFilter = filter => fetch('/filtres', {
  method: 'put',
  body: JSON.stringify(filter),
  headers: {
    'Content-Type': 'application/json'
  }
})

const newArticle = article => fetch('/articles', {
  method: 'post',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  }
})

const updateArticle = article => fetch('/articles', {
  method: 'put',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  }
})
export default {
  getArticles,
  getFilters,
  getEquipe,
  newFilter,
  updateFilter,
  newArticle,
  updateArticle
}
