import React from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import styles from './styles.module.scss';

const courseLengthToString = (length) => {
  length = Number(length);
  const h = Math.floor(length / 3600);
  const m = Math.floor(length % 3600 / 60);

  const hDisplay = h > 0 ? h + (h === 1 ? " hour" : " hours") : "";
  const mDisplay = m > 0 ? m + (m === 1 ? " minute" : " minutes") : "";
  return [hDisplay, mDisplay ];
}


const CoursePageHero = (props) =>
  <section className={ styles.capsule }>
    <div className={ styles.intro }>
      <div className={ styles.colXS12 }>
        <span onClick={ () => props.history.goBack() } className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
            back
        </span>
      </div>
      <div className={ styles.colXS12 }>
        <Hx className={ styles.title } size="1">{props.title}</Hx>
      </div>
      <div className={ styles.colXS12 }>
        <Para className={ styles.subtitle }>
          {props.subtitle}
        </Para>
      </div>
      <div className={ styles.colXS12 }>
        <Para className={ styles.time }>
          {!!props.length &&
              <span>{ courseLengthToString(props.length).join(' ') }</span>
          }
        </Para>
      </div>
    </div>
  </section>
  ;


export default CoursePageHero;
