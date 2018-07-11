const api = async (path, opts) =>
  (await fetch(`https://api.atelier-rusch.com${path}`, opts)).json()

const methodMan = method => (path, body) => api(path, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

api.post = methodMan('post')
api.put = methodMan('put')
api.delete = methodMan('delete')

const getArticles = () => api('/articles')

const getFilters = () => api('/filters')

const getEquipe = () => api('/equipe')

const getPartenaires = () => api('/partenaires')

const newPartenaire = partenaire => api.post('/partenaires', partenaire)

const updatePartenaire = (id, partenaire) =>
  api.put(`/partenaires/${id}`, partenaire)

const deletePartenaire = (id, partenaire) =>
  api.delete(`/partenaires/${id}`, partenaire)

const newFilter = filter => api.post('/filters', filter)

const updateFilter = (id, filter) => api.put(`/filters/${id}`, filter)

const deleteFilter = (id, filter) => api.delete(`/filters/${id}`, filter)

const newArticle = article => api.post('/articles', article)

const updateArticle = (id, article) => api.put(`/articles/${id}`, article)

const deleteArticle = (id, article) => api.delete(`/articles/${id}`, article)

const newMember = member => api.post('/equipe', member)

const updateMember = (id, member) => api.put(`/equipe/${id}`, member)

const deleteMember = (id, member) => api.delete(`/equipe/${id}`, member)

//credentials routes

const loginUser = (user) => api.post('/sign-in', user)

const logoutUser = () => api('/sign-out')

//credentials routesgit

export default {
  getArticles,
  getFilters,
  getEquipe,
  getPartenaires,
  newFilter,
  updateFilter,
  deleteFilter,
  newPartenaire,
  updatePartenaire,
  deletePartenaire,
  newArticle,
  updateArticle,
  deleteArticle,
  newMember,
  updateMember,
  deleteMember,
  loginUser,
  logoutUser
}
