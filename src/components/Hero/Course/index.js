import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import styles from './styles.module.scss';

const courseLengthToString = (length) => {
    length = Number(length);
    var h = Math.floor(length / 3600);
    var m = Math.floor(length % 3600 / 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
    return [hDisplay, mDisplay ];
}


const CoursePageHero = props => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.intro }>
        <span onClick={ () => props.history.goBack() } className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          back
        </span>
        <Hx className={ styles.title } size="1">{props.title}</Hx>
        <Para className={ styles.subtitle }>
          {props.subtitle}
        </Para>
        <Para className={ styles.time }>
          {!!props.length &&
            <span>{ courseLengthToString(props.length).join(' ') }</span>
          }
        </Para>
      </div>
    </section>
  );
};


export default CoursePageHero;
