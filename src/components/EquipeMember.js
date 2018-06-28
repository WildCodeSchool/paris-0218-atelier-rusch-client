import React from 'react'
import './css/Equipe.css'
import michael from './img/michael.jpg'

const EquipeMember = ({imageUrl, name, position, expertise, links, id}) =>
  <div className="memberContainer" style={{ zIndex: `${id}` }}>
    <img className="memberPic" src={michael} />
    <div className="memberName green bold">Michael Schnell</div>
    <h6>Designer, expert en co-design et conception de projet</h6>
    <div className="memberContent">
    Convaincu que les approches fondées sur l’expérience
    de l’utilisateur et sur l’innovation sociale
    ont des effets positifs pour les collectivités publiques,
    Michael fonde l’Atelier Rusch et codirige les activités
    de conseil pour la co-conception de projets pour le
    privé et les collectivités.
    </div>
    <div className="memberContent">
    <u>Son parcours</u> :
    Designer de formation (Strate - école
    de design), issu des beaux-arts, il travaille aux côtés
    de François Jégou (directeur scientifique de la 27e
    Région), au laboratoire d’innovation sociale Strategic
    Design Scenarios où il développe et applique in situ
    des outils de co-conception pour l’accompagnement
    des Agendas 21 de Bruxelles et de Molenbeek. Il
    diversifie ses collaborations chez Abria, cabinet de
    conseil en innovation de services où il intervient sur
    la scénarisation des parcours utilisateurs (SNCF,
    Cora, Croix Rouge). Suite au succès de son projet
    k.di lib, il fonde un collectif de designers qui réalisent
    des travaux de recherche en design de service. En
    2014, il co-fonde l’Atelier RUSCH et accompagne
    les collectivités et les entreprises dans la conception
    de projets innovants et la visualisation de processus
    complexes.</div>
    <div className="smallLinksContainer">
      <span className="smallLink">Son LinkedIn</span>
      <span className="smallLink">Son Portfolio</span>
    </div>
  </div>

export default EquipeMember
