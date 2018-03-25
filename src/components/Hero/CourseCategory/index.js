import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';
import Search from 'Components/Search';
import Para from 'Elements/Para';
import { IconArrowRight } from 'Elements/Icons';


const CoursesHero = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.intro }>
        <Link to="/course-library/" className={ styles.navigation }>
          <IconArrowRight fill={ styles.orangePrimary } className={ styles.arrow } />
          Courses
        </Link>
        <h1 className={ styles.title }>
          {props.title}
        </h1>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non lectus eget eros cursus eleifend ac non felis. Proin consequat tincidunt varius. Vivamus porttitor lectus nec ante viverra pretium. Cras odio enim, blandit a aliquam id, gravida a neque. Vestibulum felis lectus, placerat quis nulla at, tincidunt auctor erat. Aenean ultricies nulla orci, vitae dictum velit tempor a. Vestibulum fermentum est elit, vel semper erat vestibulum non.
        </Para>
      </div>
    </section>
  );
};


export default CoursesHero;
