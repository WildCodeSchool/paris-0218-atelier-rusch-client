const getArticles = () => fetch('/articles').then(res => res.json())

const getFilters = () => fetch('/filters').then(res => res.json())

const getEquipe = () => fetch('/equipe').then(res => res.json())

const getPartenaires = () => fetch('/partenaires').then(res => res.json())

const newPartenaire = partenaire => fetch('/partenaires', {
  method: 'post',
  body: JSON.stringify(partenaire),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const updatePartenaire = (id, partenaire) => fetch(`/partenaires/${id}`, {
  method: 'put',
  body: JSON.stringify(partenaire),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const deletePartenaire = (id, partenaire) => fetch(`/partenaires/${id}`, {
  method: 'delete',
  body: JSON.stringify(partenaire),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const newFilter = filter => fetch('/filters', {
  method: 'post',
  body: JSON.stringify(filter),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const updateFilter = (id, filter) => fetch(`/filters/${id}`, {
  method: 'put',
  body: JSON.stringify(filter),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const deleteFilter = (id, filter) => fetch(`/filters/${id}`, {
  method: 'delete',
  body: JSON.stringify(filter),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const newArticle = article => fetch('/articles', {
  method: 'post',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const updateArticle = (id, article) => fetch(`/articles/${id}`, {
  method: 'put',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const deleteArticle = (id, article) => fetch(`/articles/${id}`, {
  method: 'delete',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const newMember = member => fetch('/equipe', {
  method: 'post',
  body: JSON.stringify(member),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const updateMember = (id, member) => fetch(`/equipe/${id}`, {
  method: 'put',
  body: JSON.stringify(member),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

const deleteMember = (id, member) => fetch(`/equipe/${id}`, {
  method: 'delete',
  body: JSON.stringify(member),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials': 'include'
})

//credentials routes

const loginUser = (user) => fetch(/sign-in/, {
  method: 'post',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json'
  },
  'credentials' : 'include'
})

const logoutUser = () => fetch(/sign-out/)

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
