import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { CourseCategoryHero as Hero } from 'Components/Hero'

const CourseCategory = ({ pathContext }) => (
  <main className={styles.category}>
    <Hero title={pathContext.tagname} />
  </main>
);

export default CourseCategory;
