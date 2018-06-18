export const setActivePage = (pageActive) => ({ type: 'SET_ACTIVE_PAGE', pageActive: pageActive })

export const loadArticles = articles => ({ type: 'LOAD_ARTICLES', articles })

export const loadFilters = filters => ({ type: 'LOAD_FILTERS', filters })

export const filterArticles = articles => ({ type: 'FILTER_ARTICLES', articles })

export const loadModale = (id, displayModale) => ({ type: 'LOAD_MODALE', id, displayModale })

// export const closeModale = () => ({ type: 'CLOSE_MODALE' })

