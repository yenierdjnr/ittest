import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';

const PageNotFoundContent = props => {
  return (
    <section className={ styles.container }>
        <Hx className={ styles.content } color={ styles.offBlack } >Sometimes I feel like we are just out of sync. I'm going one way and you're heading somewhere else. Can't we just start this over?</Hx>
        <div className={ styles.link } >
          <TextLink to="/">Start Over</TextLink>
        </div>
    </section>
  );
};


export default PageNotFoundContent;
