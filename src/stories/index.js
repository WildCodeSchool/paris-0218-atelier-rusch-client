import React from 'react'

import { storiesOf } from '@storybook/react'

import Article from '../components/Article'
import ArticleThumbnail from '../components/ArticleThumbnail'
import mockedArticles from '../mocks/articles.json'
import FormExemple from '../components/FormExemple'

// import global App stylesheet
import '../App.css'

// storiesOf('NavBarLink', module)
//   .add('normal', () => <NavBarLink />)
//   .add('hover & active page', () => <NavBarLink />)

storiesOf('ArticleThumbnail', module)
  .add('classic', () => <ArticleThumbnail article={mockedArticles[0]} />)

storiesOf('Article', module)
  .add('article 1', () => <Article article={mockedArticles[0]} />)
  .add('article 2', () => <Article article={mockedArticles[1]} />)

storiesOf('FormExemple', module)
  .add('exemple 1', () => <FormExemple />)
