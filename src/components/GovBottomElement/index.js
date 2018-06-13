import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconLgBuilding, IconSmBuilding, IconBooks } from 'Elements/Icons';


const GovernmentContent = props => {
  return (
    <section className={ styles.container }>

        <ul className={ styles.list }>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
              <IconLgBuilding className={ styles['icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">Federal Agencies</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Meet 8140 (formerly 8570) information assurance baseline and continuing education learning requirements with ITProTV. Learn more about 8140 information assurance requirements.</Para>
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
            <IconSmBuilding className={ styles['icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">State and Local Agencies</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>ITProTV is on the GSA schedule and therefore qualifies as a "cooperative purchasing" contract.</Para>
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
              <IconBooks className={ styles['icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">Education</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Train your staff or used ITProTV as part of your curriculum. Help those starting in IT, or students looking to enhance their career with new IT skills and certifications.</Para>
            </div>
          </li>
        </ul>

    </section>
  );
};


export default GovernmentContent;
