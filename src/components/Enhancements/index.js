import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconExams, IconLabs } from 'Elements/Icons';


const Enhancements = props => {
  return (
    <section className={ styles.container }>
      <Hx className={ styles.title } color={ styles.offBlack } size="2">Enhance your learning with vLabs  & practice exams.</Hx>
      <div className={ styles.learnings }>
        <div className={ styles['hands-on'] }>
          <div className={ styles['icon-box']}>
            <IconLabs className={ styles['icon-labs'] }/>
          </div>
          <Hx className={ styles['topic-title'] } color={ styles.offBlack } size="4">Hands-on learning with hosted virtual labs</Hx>
          <Para className={ styles.summary } color={ styles.darkGrey }>Try out your skills on virtual machine labs with multiple  instances of Windows Server and Desktop Clients on your OSX, Linux, iOS device, and Windows platform.</Para>
          <TextLink>view virtural labs</TextLink>
        </div>
        <div className={ styles['practice-exams'] }>
          <div className={ styles['icon-box']}>
            <IconExams className={ styles['icon-exams'] }/>
          </div>
          <Hx className={ styles['topic-title'] } color={ styles.offBlack } size="4">Pass certifications with  practice exams</Hx>
          <Para className={ styles.summary } color={ styles.darkGrey }>Prepare for tough certification examinations with current tests from Kaplan IT Training®. Take and re-take to ensure you're ready before you sit for the exam.</Para>
          <TextLink>see practice tests</TextLink>
        </div>
      </div>
    </section>
  );
};


export default Enhancements;
