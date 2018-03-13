import React, { Component } from 'react';
import styles from './styles.module.scss';

import Hx from 'Elements/Hx';
import ButtonSwitch from 'Elements/ButtonSwitch';
import { Free, Premium, Standard } from 'Components/CardPlan';


class Plans extends Component {
  render() {
    return (
      <section className={ styles.container }>
        <header className={ styles.heading }>
          <Hx className={ styles.title } size="2">Start or advance your IT  career today.</Hx>
          <ButtonSwitch className={ styles.switch }/>
        </header>

        <div className={ styles['card-plans'] }>
          <Premium />
          <Standard />
          <Free />
        </div>
      </section>
    );
  }
};


export default Plans;
