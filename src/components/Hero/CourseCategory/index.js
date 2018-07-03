import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import styles from './styles.module.scss';


const CourseCategoryHero = (props) => 
  <section className={ styles.capsule }>
    <div className={ styles.row }>
      <div className={ styles.intro }>
        <Link to="/courses/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
            Courses
        </Link>
        <Hx className={ styles.title }  size="1">{props.title}</Hx>
        <Para className={ styles.summary }>
          {props.description}
        </Para>
      </div>
    </div>
  </section>
  ;


export default CourseCategoryHero;
