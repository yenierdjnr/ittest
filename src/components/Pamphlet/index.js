import React from 'react';

import styles from './styles.module.scss';
import articleImage from 'Images/article@2x.png';
import Link from 'Elements/Link';
import { IconArrowRight } from 'Elements/Icons'


const orangePrimary = '#F6621C';

const Pamphlet = props => {
  return (
    <section className={ styles.container }>
      <img className={ styles['article-img'] } src={ articleImage } width="260" height="195" />
      <div className={ styles.info }>
        <h2 className={ styles.title }>The Tough Ten: 10 Hardest IT  Gigs to Hire For</h2>
        <p className={ styles.summary }>IT hiring is a bidding war. Get this article to see what's in demand  and see what each position is worth – salary ranges included!</p>
        <a className={ styles.link }>
          <span className={ styles.action }>get my copy</span>
          <IconArrowRight className={ styles.arrow } fill={ orangePrimary }/>
        </a>
      </div>
    </section>
  );
};


export default Pamphlet;
