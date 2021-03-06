import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';
import styles from './styles.module.scss';


const NewContent = (props) => {
  const { className='' } = props;

  return (
    <section className={ `${className} ${styles.capsule}` }>
      <div className={ styles.content}>
        <div className={ styles.summary }>
          <Hx className={ styles.title } size="2">New Content Added Daily</Hx>
          <Para className={ styles.subtitle }>Don't see what you need? New courses are added every day.</Para>
          <Para className={ styles.subtitle }>Join for free  to see what's coming next.</Para>
        </div>
        <div className={ styles.cta }>
          <ButtonLink to='/plans/'>try it free</ButtonLink>
        </div>
      </div>
    </section>
  );
};


export default NewContent;
