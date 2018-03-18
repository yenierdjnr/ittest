import React, { Fragment } from 'react';

import styles from './styles.module.scss';
import { IconCheck } from 'Elements/Icons';


const benefitsData = [
  {
    title: 'First 7 days free',
    subtitle: '(Monthly membership only)',
    premium: true,
    standard: true,
    free: true
  },
  {
    title: 'Access to daily live stream broadcast',
    premium: true,
    standard: true,
    free: true
  },
  {
    title: 'Access to select free content',
    premium: true,
    standard: true,
    free: true
  },
  {
    title: 'Access via mobile apps, Fire TV, Roku, and Apple TV',
    premium: true,
    standard: true,
    free: true
  },
  {
    title: 'Access to on-demand course library',
    premium: true,
    standard: true,
    free: false
  },
  {
    title: 'Live chat with hosts and other members',
    premium: true,
    standard: true,
    free: false
  },
  {
    title: 'Post questions and respond to posts in the Q&A forum',
    premium: true,
    standard: true,
    free: false
  },
  {
    title: 'Download course video and audio',
    subtitle: '(Annual membership only)',
    premium: true,
    standard: true,
    free: false
  },
  {
    title: 'Take unlimited Transcender practice exams',
    subtitle: '($109 individual value)',
    premium: true,
    standard: false,
    free: false
  },
  {
    title: 'Launch Premium virtual labs',
    subtitle: '($249 individual value)',
    premium: true,
    standard: false,
    free: false
  },
  {
    title: 'Access to DevProTV content',
    premium: true,
    standard: false,
    free: false
  },
  {
    title: 'Career Coach services',
    premium: true,
    standard: false,
    free: false
  },
];

const BenefitList = ({ className='' }) => {
  function Row(data, i) {
    const { subtitle } = data;
    const regexTest = /membership/g;
    let container = styles.container;
    let _title = styles.title
    let _subtitle = styles.subtitle;

    if (subtitle) {
      container = `${container} ${styles['with-subtitle']}`;
      _title = `${_title} ${styles['with-subtitle']}`;

      if (regexTest.test(subtitle)) {
        _subtitle = `${_subtitle} ${styles.bold}`;
      }
    }


    return (
      <div key={ i } className={ container }>
        <div className={ styles.type }>
          <span className={ _title }>{ data.title }</span>
          <span className={ _subtitle }>{ data.subtitle }</span>
        </div>
        <div className={ styles.access }>
          <IconCheck fill={ styles.purple } />
          {
            data.standard
              ? <IconCheck fill={ styles.darkBlue } />
              : <IconCheck fill={ styles.white } />
          }
          {
            data.free
              ? <IconCheck fill={ styles.darkGreen } />
              : <IconCheck fill={ styles.white } />
          }
        </div>
      </div>
    );
  }

  return (
    <Fragment>
    {
      benefitsData.map((data, i) => {
        return Row(data, i);
      })
    }
    </Fragment>
  );
};


export default BenefitList;