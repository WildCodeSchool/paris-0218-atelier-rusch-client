import React from 'react'

import { storiesOf } from '@storybook/react'

import store from '../store.js'

import Modale from '../components/Modale'

import { ArticlePreview, demoArticle } from '../components/ArticlePreview'
import ArticleThumbnail from '../components/ArticleThumbnail'
import mockedArticles from '../mocks/articles.json'
import mockedMembers from '../mocks/members.json'
import FormExemple from '../components/FormExemple'
import ArticleForm from '../components/ArticleForm'
import Atelier from '../components/Atelier'
import EquipeMember from '../components/EquipeMember'

import RedirectingBlockToAllArticles from '../components/RedirectingBlockToAllArticles'

// import global App stylesheet
import '../App.css'

// storiesOf('NavBarLink', module)
//   .add('normal', () => <NavBarLink />)
//   .add('hover & active page', () => <NavBarLink />)

const state = store.getState()

storiesOf('Thumbnails', module)
  .add('article classic', () => <ArticleThumbnail className="ArticleThumbnailClassic" article={mockedArticles[0]} />)
  .add('article with star', () => <ArticleThumbnail className="ArticleThumbnailClassic ArticleThumbnailHasStar FilterBlack" article={mockedArticles[0]} />)
  .add('redirection block', () => <RedirectingBlockToAllArticles />)

storiesOf('Modale', module)
  .add('Modale Article', () => <Modale article={mockedArticles[3]} />)
  .add('Modale Projet', () => <Modale article={mockedArticles[8]} />)

// storiesOf('ArticleForm', module)
//   .add('exemple 1', () => <ArticleForm />)

storiesOf('Page Atelier', module)
  .add('Page Atelier', () => <Atelier />)

storiesOf('Section Équipe', module)
  .add('Team member', () => <EquipeMember member={mockedMembers[0]}/>)
