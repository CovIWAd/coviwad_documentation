import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Documents',
    path: 'documents',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Permet d'enregistrer ses documents relatifs au covid, comme les vaccins, les tests PCR...
      </>
    ),
  },
  {
    title: 'News',
    path: 'news',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Permet de recevoir en temps réel de nombreuses informations relatives à la situation sanitaire.
      </>
    ),
  },
  {
    title: 'Geolocation',
    path: 'geolocation',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Permet de savoir si vous croisez des personnes qui se sont déclarés positives au covid afin de vous isoler.
      </>
    ),
  },
  {
    title: 'Users',
    path: 'users',
    Svg: require('../../static/img/undraw_docusaurus_fb.svg').default,
    description: (
      <>
        Permet de modifier les informations (nom et prénom) d'un utilisateur ainsi qu'accéder à tous les utilisateurs pour l'admin.
      </>
    ),
  },
  {
    title: 'Keycloak',
    path: 'keycloak',
    Svg: require('../../static/img/undraw_docusaurus_browser.svg').default,
    description: (
      <>
        Permet de gérer les utilisateurs de l'application (sign-in, sign-up, roles...).
      </>
    ),
  },
  {
    title: 'Kafka',
    path: 'kafka',
    Svg: require('../../static/img/undraw_docusaurus_process.svg').default,
    description: (
      <>
        Permet d'enregistrer les localisations et permet de récupérer les cas contact lorsqu'un utilisateur se déclare positif.
      </>
    ),
  },
];

function Feature({Svg, title, description, path}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
