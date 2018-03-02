import React from 'react';
import styles from './styles.module.scss';

import Link from 'Elements/Link';
import { IconPattern } from 'Elements/Icons';


const Plans = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <h2 className={ styles.title }>Whether you're looking for team or individual training, there's an ITProTV plan for you.</h2>
        <p className={ styles.info }>With more than 3,300 hours of engaging video training for IT professionals, you'll find the courses you and your team need to stay current and get the latest certifications. Training is provided by experienced, proven, hands-on professionals who have been in the authorized training business since 2000.</p>
        <div className={ styles.links}>
          <Link className={ `${styles.link} ${styles['for-teams-link']}` } to="/for-teams/">for teams</Link>
          <Link className={ `${styles.link} ${styles['for-you-link']}` } to="/for-you/">for you</Link>
        </div>
      </div>
      <IconPattern className={ styles.icon } />
    </section>
  );
};


export default Plans;
