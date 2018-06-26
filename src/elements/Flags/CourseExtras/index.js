import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPracticeExam, IconVirtualLab } from 'Elements/Icons';


const CourseTopic = ({ className='', vLab='', exam='' }) => {
  return (
    <div className={ styles.extras }>
      <div className={ styles.extra } color={ styles.offBlack }>
        { vLab &&
          <div>
            <IconVirtualLab className={ styles.icon } /><span className={ styles.para }>This course has a virtual lab</span>
          </div>
        }
      </div>
      <div className={ styles.extra } color={ styles.offBlack } >
        { exam &&
          <div>
            <IconPracticeExam className={ styles.icon } /><span className={ styles.para }>This course has a practice exam</span>
          </div>
        }
      </div>
    </div>
  );
};

export default CourseTopic;
