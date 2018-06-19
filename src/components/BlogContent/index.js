import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';

const BlogContent = props => {
  return (
    <section className={ styles.container }>
        <Hx className={ styles.content } color={ styles.offBlack } >Coming soon. Check back for the new ITProTV IT training blog.</Hx>
    </section>
  );
};


export default BlogContent;
