import React from 'react'
import './css/Atelier.css'
import './css/ArticleThumbnail.css'
import AtelierSection from './AtelierSection.js'

const Atelier = () => {
  const viewportHeight = window.innerHeight - 55
  return (
    <div>

      <div className="headerAtelier FilterBlack" style={{height: viewportHeight}}>
      <h2>
      <span className="green bold">L'Atelier Rusch</span> propose des méthodes créatives pour organiser la pensée collective et co-concevoir de nouveaux services pour les collectivités et les entreprises.
      </h2>
      </div>

      <AtelierSection title={'Notre vision'} bgColor="white">
        <p>
        Nous pensons que le design est une expertise qui permet de concevoir des projets responsables. Mais contrairement à des approches plus techniques, la nature transversal du design lui donne la capacité de faire dialoguer expertises variés, et de s’aventurer dans des domaines qui peuvent lui paraître éloigné, ou encore de compléter d’autres corps de métier. Évidemment, le design n’a pas réponse à tout, et se doit donc de d’avancer en coopération avec les savoir-faire et expertises propres au développement de chaque projets : qu’elles soient industrielles, sociales, culturelles, et bien sûr quotidienne.
        </p>
        <p className="quote">Nous sommes convaincus que la participation citoyenne est une des clefs de l’innovation. </p>
        <p>Non pas par sa simple concertation, mais par son intégration dans la conception. Ainsi, les usagers deviennent moteur des transformations de leur environnements.
        </p>
      </AtelierSection>

      <AtelierSection title={'Notre approche'} bgColor="white">
        <p className="quote">Le design est une approche avant tout centrée sur les usagers.</p>
        <p>
        Nous les intégrons aux développement de nos projets en progressant à l’aide d’ateliers participatifs. Ils sont toujours uniques dans leur forme et leur fond, pour s’adapter à leur public, leurs enjeux, et leurs contextes. Ces ateliers nous accompagnent durant tout le développement du projet et condensent une approche de designer : depuis l’exploration d’idées, jusqu’à des chantiers participatifs, en passant par des phases de co-conception. En les utilisant comme des vecteurs de dialogue entre les acteurs et les usagers, nous produisons une matière qui mêle des qualités sensibles et techniques. Ainsi, nous nourrissons le développement de projets innovants, tout en restant au plus proches des besoins des usagers.
        </p>
      </AtelierSection>

      <AtelierSection title={'Notre équipe'} bgColor="white">
      </AtelierSection>

      <AtelierSection title={'Notre histoire'} bgColor="white">
      </AtelierSection>

      <AtelierSection title={'Notre écosystème'} bgColor="#5aff6e">
        <p>
        L’atelier Rusch fonctionne en collaboration avec un éventail de savoir-faire, y compris techniques et industriels. Dans cette idée, nous avons installés notre bureau au sein d’ICIMontreuil, un atelier solidaire où se cotoient quotidiennement des artisans et makers de différents milieux.<br/>
        Ainsi, nous avons accès à un parc de machine qui nous permettent de facilement prototyper nos projet pour expérimenter nos avancées échelle 1, de développer des outils de facilitations ou des scénographies, ou d’engager nos chantier participatif sur des points techniques difficilement abordables pour un grand public. De plus, nous tissons des partenariats avec les entreprises que nous y croisons quotidiennements, qu’elles soient artisanales ou industriels.
        </p>
      </AtelierSection>

    </div>
  )
}

export default Atelier
