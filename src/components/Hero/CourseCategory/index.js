import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';
import Search from 'Components/Search';
import styles from './styles.module.scss';


const CoursesHero = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.intro }>
        <Link to="/courses/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          Courses
        </Link>
        <Hx className={ styles.title }  size="1">{props.title}</Hx>
        <Para className={ styles.summary }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lectus eget eros cursus eleifend ac non felis. Proin consequat tincidunt varius. Vivamus porttitor lectus nec ante viverra pretium. Cras odio enim, blandit a aliquam id, gravida a neque. Vestibulum felis lectus, placerat quis nulla at, tincidunt auctor erat. Aenean ultricies nulla orci, vitae dictum velit tempor a. Vestibulum fermentum est elit, vel semper erat vestibulum non.
        </Para>
      </div>
    </section>
  );
};


export default CoursesHero;
