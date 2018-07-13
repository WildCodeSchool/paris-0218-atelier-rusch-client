import React from 'react'
import Nav from './Nav.js'
import './css/Atelier.css'
import './css/Equipe.css'
import './css/ArticleThumbnail.css'
import AtelierSection from './AtelierSection.js'
import AnchorLink from './AnchorLink.js'
import EquipeMember from './EquipeMember.js'
import Partenaire from './Partenaire.js'
import store from '../store.js'

const Atelier = () => {
  const viewportHeight = window.innerHeight - 55

  const state = store.getState()

  const members = state.members.allMembers.map(member => <EquipeMember key={member.id} member={member} />)

  const partners = state.partners.allPartners.map(partner => <Partenaire key={partner.id} partner={partner} />)

  return (
    <div>
      <Nav />
      <div className="spacer"></div>
      <div className="headerAtelier FilterBlack" style={{height: viewportHeight}}>
        <h2>
          <span className="green">L'Atelier Rusch</span> propose des méthodes créatives pour organiser la pensée collective et co-concevoir de nouveaux services pour les collectivités et les entreprises.
        </h2>
        <div className="anchorLinksContainer">
          <AnchorLink title={'Notre vision'} />
          <AnchorLink title={'Notre approche'} />
          <AnchorLink title={'Notre équipe'} />
          <AnchorLink title={'Notre histoire'} />
          <AnchorLink title={'Notre écosystème'} />
          <AnchorLink title={'Nos partenaires'} />
        </div>
      </div>

      <AtelierSection title={'Notre vision'} bgColor="white">
        <p>
        Inspiré des techniques d’innovations sociales des pays nordiques et des méthodes du design, l’Atelier Rusch se donne pour mission de véhiculer et d’expérimenter les méthodes créatives d’organisation de l’intelligence collective de manière transversale et participative. Avec ces méthodes, nous veillons à ce que chacun se réapproprie des lieux, des thématiques, des projets par le FAIRE avec comme variable principale : l’expérience utilisateur.
        </p>
        <p className="quote">Nous sommes convaincus que la participation citoyenne est une des clefs de l’innovation. </p>
        <p>Non pas par sa simple concertation, mais par son intégration dans la conception de projet. Ainsi, les usagers deviennent moteurs et acteurs des transformations de leur environnement.
        </p>
      </AtelierSection>

      <AtelierSection title={'Notre approche'} bgColor="white">
        <p>
        Notre cœur de métier : la co-conception de services, d’espaces et de projets collaboratifs avec les méthodes du design. Nous accompagnons les collectivités et les entreprises à réaliser leurs objectifs et plans d’actions par une concrétisation tangible et matérielle.
        </p>
        <p className="quote">Le design est une approche avant tout centrée sur les usagers.</p>
        <p>
        Nous les intégrons au développement de nos projets dans une méthodologie progressive de l’exploration d’idées, jusqu’à des chantiers participatifs, en passant par des phases de co-conception ouverte à la participation de toutes les parties prenantes. Nos méthodes participatives sont toujours uniques dans leurs formes et leurs fonds, pour s’adapter aux publics, aux enjeux, et aux contextes. Les techniques créatives que nous concevons sont vectrices de dialogues entre les acteurs et les usagers, elles produisent une matière qui mêle des qualités sensibles et techniques. Ainsi, nous nourrissons le développement de projets innovants, tout en restant au plus proches des besoins des usagers.
        </p>
      </AtelierSection>

      <AtelierSection title={'Notre équipe'} bgColor="white">
        <div className="EquipeMembersContainer">
          {members}
        </div>
      </AtelierSection>

      <AtelierSection title={'Notre histoire'} bgColor="white">
        <p>
        Né de la rencontre du design et des problématiques urbaines, l’Atelier Rusch est d’abord un collectif hybride né en 2014 composé de designers, d’urbanistes, de cartographes et d’économistes. Le collectif RUSCH doit son nom aux racines germaniques de ses fondateurs, de sa proximité avec le mot « ruche » qui symbolise le travail d’équipe et de l’anglais « rush » qui se traduit par la précipitation dans laquelle on peut réaliser des projets qui manque de sens si on n'y ajoute pas le C de Co-construire avec l’usager et de Cœur (en lien avec les tatouages de nos mentors respectifs rencontrés tout au long de nos parcours ;-).
        </p>
        <p className='quote'>
        Durant plus de deux ans, le collectif s’est consacré à la rédaction d’articles et l’expérimentation d’outils d’aide à la participation à la fois avec le secteur public et le secteur privé.
        </p>
        <p>
        Fort de son succès, en novembre 2016, le collectif Rusch devient l’Atelier Rusch et agrandit son équipe de designers et d’innovateurs pour répondre à de nouveaux projets toujours plus ambitieux, créatifs et co-construit.
        </p>
      </AtelierSection>

      <AtelierSection title={'Notre écosystème'} bgColor="#5aff6e">
        <p>
        L’atelier Rusch fonctionne en collaboration avec un éventail de savoir-faire, y compris techniques et industriels. Dans cette idée, nous avons installés notre bureau au sein d’ICIMontreuil, un atelier solidaire où se cotoient quotidiennement des artisans et makers de différents milieux.<br/>
        Ainsi, nous avons accès à un parc de machine qui nous permettent de facilement prototyper nos projet pour expérimenter nos avancées échelle 1, de développer des outils de facilitations ou des scénographies, ou d’engager nos chantier participatif sur des points techniques difficilement abordables pour un grand public. De plus, nous tissons des partenariats avec les entreprises que nous y croisons quotidiennements, qu’elles soient artisanales ou industriels.
        </p>
      </AtelierSection>

      <AtelierSection title={'Nos partenaires'} bgColor="white">
        <div className="PartenairesContainer">
          {partners}
        </div>
      </AtelierSection>

    </div>
  )
}

export default Atelier
