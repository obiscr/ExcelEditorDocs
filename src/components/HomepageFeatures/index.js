import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multiple file support',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          ExcelEditor supports opening multiple Excel file windows at the same time,
          further improving your work efficiency.
      </>
    ),
  },
  {
    title: 'Powerful data filtering capabilities',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Support regular, case matching, complete character filtering, and also support
      filtering in a single column.
      It also supports filtering data based on multiple criteria at the same time.
      </>
    ),
  },
  {
    title: 'Data Merging',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          ExcelEditor supports rich editing functions such as file comparison,
          file merging, and global search and replace.
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
