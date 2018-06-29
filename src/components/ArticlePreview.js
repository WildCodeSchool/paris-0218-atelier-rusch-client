import React from 'react'
import './ArticlePreview.css'

export const demoArticle = {
  "id": "1",
  "section": "Lab",
  "title": "Conception participative d’espace Massy Opéra",
  "shortDescription": "Projet de réaménagement participatif du square de Grenoble à Massy porté par Erigère",
  "headerImage": "https://i.imgur.com/E0ZNDjU.png",
  "createdAt": "2018-06-07",
  "textContent": "En février 2017, Chartres Métropole inaugurait la première tranche de la future Cité de l’innovation, qui porte le nom du CM 101. Le premier lot offre déjà plus de 1150 m² de surface aménagées et accueille un incubateur (géré par le Centre Européen d’Entreprise et d’Innovation de la région Centre), 13 jeunes pousses, un espace de co-working, un espace de restauration, des salles de réunion et un mini Fablab. Ce projet nous tient particulièrement à cœur car nous revenons sur une de nos premières réalisations ! En 2016 Chartres Métropole nous avait missionné pour réunir les résidents, futurs résidents et partenaires de la Cité et réfléchir à la vision du site, sa forme, ses usages et fonctionnalités. L’ensemble du travail de co-construction avait été remis aux architectes pour intégrer les problématiques, besoins et idées dans la planification des futurs espaces. En découvrant les hangars transformés et donc le résultat des post-its remplis par des idées et des croquis, nous avons hâte d’y apporter une nouvelle touche de design de service ! A l’horizon 2019, la Cité de l’innovation représentera plus de 5100 m² avec l’ouverture de deux nouveaux bâtiments, capables d’accueillir un écosystème complet mettant en valeur l’innovation à 360°. C’est à dire, un environnement propice au développement de projets innovants des jeunes pousses, des étudiants, des chercheurs, des TPE/PME, des grandes entreprises; où chacun pourra interagir avec un réseau de professionnels, d’institutionnels et d’experts. Pour ses futurs locaux, Chartres Métropole a recensé auprès des résidents actuels et futurs, le besoin d’un accompagnement continu sur la communication et une aide en marketing. De ce constat, est née l’idée de proposer un « marketing lab ». Notre mission de cette année sera d’accompagner la définition, la co-conception et la mise en place d’un lieu de service marketing et communication au sein du CM101. En partenariat avec l’agence UZFUL, agence spécialisée en marketing engagé et avec la participation des résidents, futurs résidents, partenaires et acteurs ressources du territoire, nous rendrons tangible ce concept inédit.",
  "content": [
    { "type": "h2", "text": "Contexte et démarche" },
    { "type": "p", "text": "Le quartier Massy Opéra est inscrit dans la géographie prioritaire de la politique de la ville, et à ce titre est concerné par le Contrat de Ville 2015-2020 de la Communauté d’agglomération PARIS-SACLAY.\n\nSa vocation est de mobiliser l’ensemble des partenaires institutionnels et les habitants dans la poursuite d’un triple objectif : réduire les écarts de développement entre quartiers en difficulté et leur aire urbaine environnante, améliorer les conditions de vie des habitants, et développer l’attractivité de ces quartiers." },
    { "type": "img", "url": "https://i.imgur.com/lfmOYAQ.png" },
    { "type": "h2", "text": "Enjeux" },
    { "type": "p", "text": "L’enjeu de la démarche est la réappropriation des squares par ses habitants. L’objectif est de composer avec l’existant et d’apporter des améliorations paysagères et physiques dans les squares." },
    { "type": "blockquote", "text": "Ensemble, réinventions le square de Grenoble !" },
    { "type": "p", "text": "La démarche vise à interroger les habitants et de recueillir leurs attentes et les améliorations souhaitées sur le square de Grenoble et de Belfort. Nous leur proposerons ensuite de manière pédagogique et ludique d’imaginer du mobilier et un embellissement paysager de leurs squares. L’objectif final des ateliers est de les faire participer au chantier d’embellissement et d’installation d’un nouveau mobilier au printemps 2017 pour le square de Grenoble." },
    { "type": "imgs", "urls": [ "https://i.imgur.com/WRyn5ee.png", "https://i.imgur.com/U3ArH2H.png" ] },
    { "type": "p", "text": "Nous leur proposerons ensuite de manière pédagogique et ludique d’imaginer du mobilier et un embellissement paysager de leurs squares. L’objectif final des ateliers est de les faire participer au chantier d’embellissement et d’installation d’un nouveau mobilier au printemps 2017 pour le square de Grenoble." },
    { "type": "imgs", "urls": [ "https://i.imgur.com/2AfzUUR.png", "https://i.imgur.com/qYqkxKH.png" ] },
    { "type": "p", "text": "La deuxième année du projet s’intéressera au réaménagement participatif du square de Belfort. La deuxième année du projet s’intéressera au réaménagement participatif du square de Belfort." }
  ]
}

const toHTML = {
  h2: ({ text }) => <h2>{text}</h2>,
  p: ({ text }) => <p>{text}</p>,
  blockquote: ({ text }) => <blockquote>{text}</blockquote>,
  img: ({ url }) => <img src={url} />,
  imgs: ({ urls }) => urls.map((url, i) => <img key={i} src={url} />),
}

const Element = ({ element }) => toHTML[element.type](element)

export const ArticlePreview = ({ article }) => {
  const content = article.content
    .map((element, i) => <Element key={i} element={element} />)

  return (
    <article className="article container">
      <header style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${article.headerImage})`}}>
        <h1>{article.title}</h1>
        <h4>{article.shortDescription}</h4>
      </header>
      <section className="article_content">
        {content}
      </section>
      <footer>
        <p>
          Posted on
          <time dateTime={article.createdAt}>{article.createdAt}</time>
          by Staff.
        </p>
      </footer>
    </article>
  )
}

export default ArticlePreview
