const getArticles = () => fetch('/articles').then(res => res.json())

const getFilters = () => fetch('/filters').then(res => res.json())

const getEquipe = () => fetch('/equipe').then(res => res.json())

const newFilter = filter => fetch('/filters', {
  method: 'post',
  body: JSON.stringify(filter),
  headers: {
    'Content-Type': 'application/json'
  }
})

const updateFilter = (id, filter) => fetch(`/filters/${id}`, {
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

const updateArticle = (id, article) => fetch(`/articles/${id}`, {
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
