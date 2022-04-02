import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'No Server Management',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        By abstracting the underlying infrastructure, deploy your code and let One Data run and scale it.
      </>
    ),
  },
  {
    title: 'Integrated Security',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Authorization policy enforced for every function and advanced security tools to ensure your application is always secure.
      </>
    ),
  },
  {
    title: 'Developer Toolset',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        From Integration to Deployment, One Data provides a rich set of tools to get the work done right. 
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
