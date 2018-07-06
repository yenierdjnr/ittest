import React from 'react';

import Link from 'Elements/Link';
import styles from './styles.module.scss';


const Plans = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <div className={ styles.content }>
          <h2 className={ styles.title }>Whether You're Looking for Team or Individual Training, There's an ITProTV Plan for You</h2>
          <p className={ styles.info }>With more than 4,000 hours of engaging video training for IT professionals, you'll find the courses you and your team need to stay current and get the latest certifications. Training is provided by experienced, proven, hands-on professionals who have been in the authorized training business since 2000.</p>
          <div className={ styles.links}>
            <Link className={ `${styles.link} ${styles['for-teams-link']}` } to="/for-teams/">for teams</Link>
            <Link className={ `${styles.link} ${styles['for-you-link']}` } to="/for-you/">for you</Link>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Plans;
