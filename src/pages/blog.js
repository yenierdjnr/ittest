import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Blog as Hero } from 'Components/Hero';
import BlogContent from 'Components/BlogContent';
import styles from './blog.module.scss';


const Blog = ({ location }) =>
  <Fragment>
    <Head location={ location }/>,
    <main className={ styles.blog }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.BlogContent }>
        <BlogContent />
      </section>

    </main>
  </Fragment>



export default Blog;
