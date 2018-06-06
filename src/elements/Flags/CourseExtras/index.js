import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPracticeExam, IconVirtualLab } from 'Elements/Icons';


const CourseTopic = ({ className='', vLab='', exam='' }) => {
  return (
    <div className={ styles.extras }>
      <Para color={ styles.offBlack }>
        { vLab &&
          <div>
            <IconVirtualLab /><span className={ styles.para }>&nbsp;&nbsp;This course has a virtual lab</span>
          </div>
        }
      </Para>
      <Para color={ styles.offBlack } >
        { exam &&
          <div>
            <IconPracticeExam /><span className={ styles.para }>&nbsp;&nbsp;This course has a practice exam</span>
          </div>
        }
      </Para>
    </div>
  );
};

export default CourseTopic;
