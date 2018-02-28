import React, { Fragment } from 'react';
import styles from './styles.module.scss';


const QuoteCard = props => {
  return (
    <Fragment>
    <div className={ styles.container }>
        <span className={ styles.quotes }>“</span>
        <div className={ styles.comment }>
          <h3 className={ styles.title}>Best training platform on the market</h3>
          <p className={ styles.summary }>I have passed my Azure and Office 365 MCSA exams using ITPro.tv and also used other courses to refresh or expand my knowledge into other areas of the IT landscape.</p>
          <span className={ styles.byUser }>James, Role Placeholder</span>
        </div>
    </div>
    <div className={ styles['bottom-bar'] }></div>
    </Fragment>
  );
};


export default QuoteCard;
