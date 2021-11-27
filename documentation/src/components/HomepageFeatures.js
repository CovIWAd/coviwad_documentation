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
        Permet d'enregistrer ses documents relatifs au covid, comme le pass sanitaire, les tests PCR...
      </>
    ),
  },
  {
    title: 'News',
    path: 'news',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Permet de recevoir en temps réel de nombreuses informations relative à la situation sanitaire.
      </>
    ),
  },
  {
    title: 'Geolocalisation',
    path: 'geolocalisation',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Permet de savoir si vous croisé des personnes qui se sont déclaré positives au covid afin de vous isoler.
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
