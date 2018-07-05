const getArticles = () => fetch('/articles').then(res => res.json())

const getFilters = () => fetch('/filters').then(res => res.json())

const getEquipe = () => fetch('/equipe').then(res => res.json())

const getPartenaires = () => fetch('/partenaires').then(res => res.json())

const newPartenaire = partenaire => fetch('/partenaires', {
  method: 'post',
  body: JSON.stringify(partenaire),
  headers: {
    'Content-Type': 'application/json'
  }
})

const updatePartenaire = (id, partenaire) => fetch(`/partenaires/${id}`, {
  method: 'put',
  body: JSON.stringify(partenaire),
  headers: {
    'Content-Type': 'application/json'
  }
})

const deletePartenaire = (id, partenaire) => fetch(`/partenaires/${id}`, {
  method: 'delete',
  body: JSON.stringify(partenaire),
  headers: {
    'Content-Type': 'application/json'
  }
})

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

const deleteFilter = (id, filter) => fetch(`/filters/${id}`, {
  method: 'delete',
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

const deleteArticle = (id, article) => fetch(`/articles/${id}`, {
  method: 'delete',
  body: JSON.stringify(article),
  headers: {
    'Content-Type': 'application/json'
  }
})

const newMember = member => fetch('/equipe', {
  method: 'post',
  body: JSON.stringify(member),
  headers: {
    'Content-Type': 'application/json',
    'credentials': 'include'
  }
})

const updateMember = (id, member) => fetch(`/equipe/${id}`, {
  method: 'put',
  body: JSON.stringify(member),
  headers: {
    'Content-Type': 'application/json'
  }
})

const deleteMember = (id, member) => fetch(`/equipe/${id}`, {
  method: 'delete',
  body: JSON.stringify(member),
  headers: {
    'Content-Type': 'application/json'
  }
})

const loginUser = (user) => fetch(/sign-in/, {
  method: 'post',
  body: JSON.stringify(user),
  headers: {
    'Content-Type': 'application/json',
    'credentials' : 'include'
  }
})

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
  loginUser
}
