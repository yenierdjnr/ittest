import React from 'react';

import styles from './styles.module.scss';
import { IconCoin, IconLaptop, IconPopcorn } from 'Elements/Icons';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import RequestForm from 'Components/RequestForm';
import { ViewportAnimation } from 'Elements/Viewport'

const ForTeamsSummary = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.leftColumn }>
        <ul className={ styles.list }>
          <ViewportAnimation>
            <li className={ styles.item }>
              <div className={ styles.iconBox }>
                <IconLaptop className={ styles.laptop }/>
              </div>
              <div className={ styles.summary }>
                <Hx color={ styles.offblack } className={ styles.title } size="4">full course library</Hx>
                <Para color={ styles.greyDark } className={ styles.subtitle }>Full course library for all IT needs - CompTIA, Cisco, Microsoft, Security, Cloud, &amp; more. Virtual labs and practice exams included. <TextLink to="/courses/" size="1.6" weight="400" ltrSpc="unset" className={ styles.textLink }>view courses</TextLink></Para>
              </div>
            </li>
          </ViewportAnimation>
          <ViewportAnimation>
            <li className={ `${styles.item} ${styles.binge}` }>
              <div className={ styles.iconBox }>
                <IconPopcorn className={ styles.popcorn }/>
              </div>
              <div className={ styles.summary }>
                <Hx color={ styles.offblack } className={ styles.title } size="4">binge-worthy learning&trade;</Hx>
                <Para color={ styles.greyDark } className={ styles.subtitle }>Engaging hosts present info in a talk-show format. Content is added daily, so there's always something new to watch.</Para>
              </div>
            </li>
          </ViewportAnimation>
          <ViewportAnimation>
            <li className={ styles.item }>
              <div className={ styles.iconBox }>
                <IconCoin className={ styles.coin }/>
              </div>
              <div className={ styles.summary }>
                <Hx color={ styles.offblack } className={ styles.title } size="4">ROI proven</Hx>
                <Para color={ styles.greyDark } className={ styles.subtitle }>Easily justify your training spend with convenient reporting showing usage and results across teams.</Para>
              </div>
            </li>
          </ViewportAnimation>
        </ul>
      </div>
      <RequestForm className={ `${styles.RequestForm} ${styles.form}` }/>
    </section>
  );
};


export default ForTeamsSummary;
