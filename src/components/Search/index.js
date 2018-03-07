import React from 'react';

import styles from './styles.module.scss';
import { IconSearch } from 'Elements/Icons';


const Search = props => {
  const { className='' } = props;

  return (
    <section className={ `${className} ${styles.container}` }>
      <input className={ styles.input } type="text" placeholder="Search lessons and courses" />
      <IconSearch className={ styles.icon }/>
    </section>
  );
};


export default Search;
