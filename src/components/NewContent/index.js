import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';


const NewContent = props => {
  const { className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <div className={ styles.summary }>
        <Hx className={ styles.title } size="2">New content added daily.</Hx>
        <Para className={ styles.subtitle }>Don't see what you need? New courses are added everyday. Join for free to see what's coming next.</Para>
      </div>
      <ButtonLink className={ styles['button-layout'] } to='/plans'>try it free</ButtonLink>
    </section>
  );
};


export default NewContent;
