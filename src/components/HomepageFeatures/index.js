import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modular Architecture',
    Svg: require('@site/static/img/integration.svg').default,
    description: (
      <>
        Our user documentation website showcases the project's modular architecture,
        making it easy for developers to understand, customize, and extend the platform
      </>
    ),
  },
  {
    title: 'Step-by-step Guides',
    Svg: require('@site/static/img/documentation.svg').default,
    description: (
      <>
        The documentation includes step-by-step guides for getting started, setting up,
        and building educational games, helping users navigate the development process
      </>
    ),
  },
  {
    title: 'Best Practices and Examples',
    Svg: require('@site/static/img/scalable.svg').default,
    description: (
      <>
        Our user documentation highlights best practices for game design and development,
        and provides practical examples to inspire and assist developers
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
