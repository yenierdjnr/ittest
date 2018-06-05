import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconPracticeExam, IconVirtualLab } from 'Elements/Icons';


const CourseTopic = ({ className='', vLab='', exam='' }) => {
  return (
    <div>
      <Para>
        { vLab &&
          <div>
            <IconVirtualLab /> This course has a virtual lab
          </div>
        }
      </Para>
      <Para>
        { exam &&
          <div>
            <IconPracticeExam /> This course has a practice exam
          </div>
        }
      </Para>
    </div>
  );
};

export default CourseTopic;
