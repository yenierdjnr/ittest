import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';
import styles from './styles.module.scss';


const NewContent = props => {
  const { className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <div className={ styles.content}>
        <div className={ styles.summary }>
          <Hx className={ styles.title } size="2">New content added daily.</Hx>
          <Para className={ styles.subtitle }>Don't see what you need? We add new course content every day. Join for free to see what's coming next.</Para>
        </div>
        <ButtonLink to='/plans'>try it free</ButtonLink>
      </div>
    </section>
  );
};


export default NewContent;
