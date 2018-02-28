import React from 'react';

import styles from './styles.module.scss';


const Stats = props => {
  return (
    <div className={ styles.container }>
      <div className={ styles.left }>
        <h1 className={ styles.num }>3,300</h1>
        <p className={ styles.summary}>hours of content with new content added daily</p>
      </div>
      <div className={ styles.center }>
        <h1 className={ styles.num }>288</h1>
        <p className={ styles.summary}>combined certifications held by ITProTV edutainers</p>
      </div>
      <div className={ styles.right }>
        <h1 className={ styles.num }>90,000</h1>
        <p className={ styles.summary}>members of the ITProTV learning community</p>
      </div>
    </div>
  );
};


export default Stats;
