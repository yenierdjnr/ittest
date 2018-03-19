import React, { Fragment } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import {
  container, quotes,
  comment, title,
  summary, byUser,
  offBlack, bottomBar
} from './styles.module.scss';


const QuoteCard = props => {
  return (
    <div className={ container }>
      <span className={ quotes }>“</span>
      <div className={ comment }>
        <Hx className={ title} color={ offBlack }>Best training platform on the market</Hx>
        <Para className={ summary } color={ offBlack }>I have passed my Azure and Office 365 MCSA exams using ITPro.tv and also used other courses to refresh or expand my knowledge into other areas of the IT landscape.</Para>
        <span className={ byUser }>James, Role Placeholder</span>
      </div>
      <div className={ bottomBar }></div>
    </div>
  );
};


export default QuoteCard;
