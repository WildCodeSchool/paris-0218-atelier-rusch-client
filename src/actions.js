export const setActivePage = pageActive => ({ type: 'SET_ACTIVE_PAGE', pageActive: pageActive })

export const loadArticles = articles => ({ type: 'LOAD_ARTICLES', articles })

export const loadFilters = filters => ({ type: 'LOAD_FILTERS', filters })

export const filterArticles = articles => ({ type: 'FILTER_ARTICLES', articles })

export const loadSlides = slides => ({ type: 'LOAD_SLIDES', slides })

export const editSlides = slides => ({ type: 'EDIT_SLIDES', slides })
