import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import Tim from 'Images/tim.jpg';
import Don from 'Images/don.jpg';
import Barry from 'Images/barry.jpg';
import Phillip from 'Images/phillip.jpg';
import Denise from 'Images/denise.jpg';
import Vivian from 'Images/vivian.jpg';
import Angie from 'Images/angie.jpg'
import Valerie from 'Images/valerie.jpg';
import Brad from 'Images/brad.jpg';
import Pete from 'Images/pete.jpg';


const TeamContent = props => {
  return (
    <section className={ styles.container }>
      <Hx size="1" className={ styles.subtitle } color={ styles.offBlack }>Meet the Leadership Team</Hx>

      <ul className={ styles.listContainer }>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Tim } alt="Tim Broom photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Tim Broom</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CEO &amp; Co-Founder</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Don } alt="Don Pezet photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Don Pezet</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CIO &amp; Co-Founder</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Barry } alt="Barry Pruett photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Barry Pruett</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CCO</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Phillip } alt="Phillip Ford photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Phillip Ford</Para>
          <Para className={ styles.title } color={ styles.offBlack }>VP of People and Culture</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Denise } alt="Denise Broom photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Denise Broom</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CFO</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Vivian } alt="Vivian Pezet photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Vivian Pezet</Para>
          <Para className={ styles.title } color={ styles.offBlack }>VP of Member Services</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Angie } alt="Angie Byers photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Angie Byers</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Relationship Strategist</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Valerie } alt="Valerie Riley photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Valerie Riley</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Marketing</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Brad } alt="Brad Noblitt photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Brad Noblitt</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Production</Para>
        </li>
        <li className={ styles.item }>
          <img className={ styles.headshot } src={ Pete } alt="Pete Briggs photo" />
          <Para className={ styles.name } color={ styles.offBlack }>Pete Briggs</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Sales and Success</Para>
        </li>
      </ul>

    </section>
  );
};


export default TeamContent;
