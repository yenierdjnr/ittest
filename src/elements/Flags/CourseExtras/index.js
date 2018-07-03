import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPracticeExam, IconVirtualLab } from 'Elements/Icons';


const CourseTopic = ({ className='', vLab='', exam='' }) => 
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
