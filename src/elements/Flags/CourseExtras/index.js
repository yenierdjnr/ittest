import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPracticeExam, IconVirtualLab } from 'Elements/Icons';


const CourseTopic = ({ className='', vLab='', exam='' }) => {
  return (
    <div className={ styles.extras }>
      <Para color={ styles.offBlack } className={ styles.para }>
        { vLab &&
          <div>
            <IconVirtualLab /> &nbsp;&nbsp;This course has a virtual lab
          </div>
        }
      </Para>
      <Para color={ styles.offBlack } className={ styles.para }>
        { exam &&
          <div>
            <IconPracticeExam /> &nbsp;&nbsp;This course has a practice exam
          </div>
        }
      </Para>
    </div>
  );
};

export default CourseTopic;
