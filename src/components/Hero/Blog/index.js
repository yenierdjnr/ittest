import React from 'react';

import Hx from 'Elements/Hx';

import {
  capsule, intro, title
} from './styles.module.scss';


const Blog = () =>
  <section className={ capsule }>
    <div className={ intro }>
      <Hx size="1" className={ title }>IT Training Blog</Hx>
    </div>
  </section>

  ;


export default Blog;
