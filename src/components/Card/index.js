import React from 'react';
import styles from './styles.module.scss';


const Card = ({ btmBarColor='black', children, className='' }) => {
  const _styles = {
    'background-color': btmBarColor
  };

  return (
    <div className={ `${className} ${styles.container}` }>
      { children }
      <div style={_styles} className={ `${styles['bottom-bar']}` }></div>
    </div>
  );
};


export default Card;