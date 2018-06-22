import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import ButtonLink from 'Elements/ButtonLink';

import {
  capsule, intro,
  title, subtitle, link
} from './styles.module.scss';


const Blog = ({ className='' }) => {
  return (
    <section className={ capsule }>
      <div className={ intro }>
        <Hx size="1" className={ title }>IT Training Blog</Hx>
      </div>
    </section>

  );
};


export default Blog;
