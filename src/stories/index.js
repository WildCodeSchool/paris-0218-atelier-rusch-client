import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import Article from '../components/Article'
import mockedArticles from '../mocks/articles.json'

import FormExemple from '../components/FormExemple'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}><span role="img" aria-label= "joli emojis">😀 😎 👍 💯</span></Button>)

storiesOf('Article', module)
  .add('article 1', () => <Article article={mockedArticles[0]} />)
  .add('article 2', () => <Article article={mockedArticles[1]} />)

storiesOf('FormExemple', module)
  .add('exemple 1', () => <FormExemple />)
