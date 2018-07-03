import React from 'react';


const IconPlay = (props) => {
  const { className='' } = props;

  return (
    <svg className={ `${className}` } width="80" height="80" viewBox="0 0 80 80">
      <path fill="#FFFFFF" fillRule="evenodd" d="M733.34,251.084 L714.664,261.868 C713.83,262.348 712.788,261.748 712.788,260.784 L712.788,239.218 C712.788,238.256 713.83,237.654 714.664,238.136 L733.34,248.918 C734.174,249.4 734.174,250.602 733.34,251.084 M720,210 C697.908,210 680,227.91 680,250 C680,272.092 697.908,290 720,290 C742.09,290 760,272.092 760,250 C760,227.91 742.09,210 720,210" opacity=".8" transform="translate(-680 -210)"/>
    </svg>
  );
};


export default IconPlay;
