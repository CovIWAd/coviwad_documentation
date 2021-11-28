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
        Allows you to save your documents related to covid, such as vaccines, PCR tests...
      </>
    ),
  },
  {
    title: 'News',
    path: 'news',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Allows you to receive in real time numerous information related to the health situation.
      </>
    ),
  },
  {
    title: 'Geolocation',
    path: 'geolocation',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Lets you know if you are crossing paths with people who have tested positive for covid in order to isolate you.
      </>
    ),
  },
  {
    title: 'Users',
    path: 'users',
    Svg: require('../../static/img/undraw_docusaurus_fb.svg').default,
    description: (
      <>
        Allows you to modify the information (first name and last name) of a user as well as access all users for the admin.
      </>
    ),
  },
  {
    title: 'Keycloak',
    path: 'keycloak',
    Svg: require('../../static/img/undraw_docusaurus_browser.svg').default,
    description: (
      <>
        Allows to manage the users of the application (sign-in, sign-up, roles...).
      </>
    ),
  },
  {
    title: 'Kafka',
    path: 'kafka',
    Svg: require('../../static/img/undraw_kafka.svg').default,
    description: (
      <>
        Allows you to record locations and retrieve contact cases when a user tests positive.
      </>
    ),
  },
  ,
  {
    title: 'Gateway',
    path: 'gateway',
    Svg: require('../../static/img/undraw_docusaurus_process.svg').default,
    description: (
        <>
          Allows to redirect the front-end to the different microservices.

        </>
    ),
  },
  ,
  {
    title: 'Front',
    path: 'front',
    Svg: require('../../static/img/undraw_front.svg').default,
    description: (
        <>
          The user interface.
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
        <a href={path}>{title}</a>
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
