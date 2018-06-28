export const setActivePage = (pageActive) => ({ type: 'SET_ACTIVE_PAGE', pageActive: pageActive })

export const loadArticles = articles => ({ type: 'LOAD_ARTICLES', articles })

export const loadFilters = filters => ({ type: 'LOAD_FILTERS', filters })

export const loadSlides = slides => ({ type: 'LOAD_SLIDES', slides })

export const editSlides = slides => ({ type: 'EDIT_SLIDES', slides })

export const toggleFilters = id => ({ type: 'TOGGLE_FILTERS', id })

