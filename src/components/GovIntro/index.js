import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ViewportAnimation } from 'Elements/Viewport'


const GovIntro = props => {
  return (
    <section className={ styles.container }>

        <ViewportAnimation>
          <Para className={ styles.intro } color={ styles.greyDark } >Training they need in a format they’ll enjoy. Ditch the boring voice-over desktop and give your team effective IT training that they’ll want to watch. ITProTV is engaging training on-demand, taught by certified instructors with combined 300+ certifications and decades of experience. GSA listed.</Para>
        </ViewportAnimation>

    </section>
  );
};


export default GovIntro;
