import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ForTeamsVideo } from 'Components/Videos';


const TrackResults = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.intro }>
        <Hx className={ styles.title } color={ styles.offBlack } size="2">Track your team’s results</Hx>
        <Para className={ styles.summary } color={ styles.darkGrey } size="2">Prove the ROI of your training spend with the ProPortal. Manage your seats, assign/un-assign team members and access monthly usage reports. See metrics like logins, viewing time, courses viewed, tracks completed and more.</Para>
      </div>
      <ForTeamsVideo className={ styles.video }/>
    </section>
  );
};


export default TrackResults;
