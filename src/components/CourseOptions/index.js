import React, { Component } from 'react';

import styles from './styles.module.scss';
import Menu from './Menu';
import Display from './Display';

import courseCategories from '../../../data/tagCategories/courseLibrary.json';


const CourseOptions = ({ categories }) => (
  <section className={ styles.container }>
    <Menu />
    <Display categories={courseCategories.tags} />
  </section>
)



export default CourseOptions;
