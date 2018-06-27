export const getActiveFilters = (allFilters) => {
  const activeFilters = allFilters.filter(({ isActive }) => isActive)

  if (activeFilters.length === 0) return allFilters
  return activeFilters
}

export const applyFiltersToSection = (section, state) => {
  const activeTags = getActiveFilters(state.filters.allFilters)

  return state.articles.allArticles
    .filter(article => {
      if (article.section !== section) return false
      for (const { filterTag } of activeTags) {
        if (article.tags.includes(filterTag)) {
          return true
        }
      }
      return false
    })
}
