import React, { Fragment } from 'react';

import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import {
  container, quotes,
  comment, title,
  summary, byUser,
  offBlack, bottomBar,
  wrapper
} from './styles.module.scss';


const QuoteCard = props => {
  return (
    <div className={ wrapper } style={ props.style }>
      <div className={ container }>
        <span className={ quotes }>“</span>
        <div className={ comment }>
          <Hx size="2" className={ title} color={ offBlack }>
            {props.title}
          </Hx>
          <Para className={ summary } color={ offBlack }>
            {props.quote}
          </Para>
          <span className={ byUser }>{props.attribution}{props.role && `, ${props.role}`}</span>
        </div>
        <div className={ bottomBar }></div>
      </div>
    </div>
  );
};


export default QuoteCard;
