import React from 'react';
import Img from 'gatsby-image';

import Link from 'Elements/Link';
import { IconArrowRight } from 'Elements/Icons'
import { ViewportAnimation } from 'Elements/Viewport'
import styles from './styles.module.scss';


const orangePrimary = '#F6621C';

const Pamphlet = ({ videoImg }) => 
  <section className={ styles.capsule }>
    <div className={ styles.content }>
      <ViewportAnimation>
        <Img resolutions={ videoImg.resolutions }/>
      </ViewportAnimation>
      <div className={ styles.info }>
        <h2 className={ styles.title }>The Tough Ten: 10 Hardest IT  Gigs to Hire For</h2>
        <p className={ styles.summary }>IT hiring is a bidding war. Get this article to see what's in demand  and see what each position is worth – salary ranges included!</p>
        <a href="http://go.itpro.tv/tough_ten" className={ styles.link }>
          <span className={ styles.action }>get my copy</span>
          <IconArrowRight className={ styles.arrow } fill={ orangePrimary }/>
        </a>
      </div>
    </div>
  </section>
  ;


export default Pamphlet;
