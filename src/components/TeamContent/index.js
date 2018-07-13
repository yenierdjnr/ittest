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


const TeamContent = () =>
  <section className={ styles.capsule }>
    <div className={ styles.colXS12 }>
      <Hx size="1" className={ styles.subtitle } color={ styles.offBlack }>Meet the Leadership Team</Hx>
    </div>
    <div className={ styles.colXS12 }>
      <div className={ styles.listcapsule }>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Tim } alt="Tim Broom" />
          <Para className={ styles.name } color={ styles.offBlack }>Tim Broom</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CEO &amp; Co-Founder</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Don } alt="Don Pezet" />
          <Para className={ styles.name } color={ styles.offBlack }>Don Pezet</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CIO &amp; Co-Founder</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Barry } alt="Barry Pruett" />
          <Para className={ styles.name } color={ styles.offBlack }>Barry Pruett</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CCO</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Phillip } alt="Phillip Ford" />
          <Para className={ styles.name } color={ styles.offBlack }>Phillip Ford</Para>
          <Para className={ styles.title } color={ styles.offBlack }>VP of People and Culture</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Denise } alt="Denise Broom" />
          <Para className={ styles.name } color={ styles.offBlack }>Denise Broom</Para>
          <Para className={ styles.title } color={ styles.offBlack }>CFO</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Vivian } alt="Vivian Pezet" />
          <Para className={ styles.name } color={ styles.offBlack }>Vivian Pezet</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Member Services</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Angie } alt="Angie Byers" />
          <Para className={ styles.name } color={ styles.offBlack }>Angie Byers</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Relationship Strategist</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Valerie } alt="Valerie Riley" />
          <Para className={ styles.name } color={ styles.offBlack }>Valerie Riley</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Marketing</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Brad } alt="Brad Noblitt" />
          <Para className={ styles.name } color={ styles.offBlack }>Brad Noblitt</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Production</Para>
        </div>
        <div className={ styles.item }>
          <img className={ styles.headshot } src={ Pete } alt="Pete Briggs" />
          <Para className={ styles.name } color={ styles.offBlack }>Pete Briggs</Para>
          <Para className={ styles.title } color={ styles.offBlack }>Director of Sales and Success</Para>
        </div>
      </div>
    </div>
  </section>
  ;


export default TeamContent;
