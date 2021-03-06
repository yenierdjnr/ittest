import React from 'react';

import styles from './styles.module.scss';
import { IconPracticeExam, IconVirtualLab } from 'Elements/Icons';


const CourseTopic = ({ vLab='', exam='' }) =>
  <div className={ styles.extras }>
    <div className={ styles.extra } color={ styles.offBlack }>
      { vLab &&
          <div>
            <IconVirtualLab className={ styles.labsicon } /><span className={ styles.para }>This course has a virtual lab</span>
          </div>
      }
    </div>
    <div className={ styles.extra } color={ styles.offBlack } >
      { exam &&
          <div>
            <IconPracticeExam className={ styles.examsicon } /><span className={ styles.para }>This course has a practice exam</span>
          </div>
      }
    </div>
  </div>
  ;

export default CourseTopic;
