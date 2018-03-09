import React from 'react';
import Link from 'gatsby-link';


const IconBars = props => {
  const { className='', fill='#FFFFFF' } = props;

  return (
    <svg width="58" height="81" viewBox="0 0 58 81">
      <g fill={ fill } fillRule="evenodd">
        <polyline fill="#FFF" points="10.846 14.457 10.849 14.46 10.849 61.998 24.889 53.895 24.889 6.399 24.891 6.354 24.889 6.346 10.849 14.453 10.849 61.908 10.842 61.911"/>
        <polygon fill="#FFF" points=".812 56.373 10.405 61.912 10.412 61.908 10.412 61.998 10.412 61.908 10.412 14.452 10.412 14.459 10.409 14.457 .812 8.917"/>
        <path fill="#E6E6ED" d="M0.8118,8.9172 L10.4088,14.4572 L10.4118,14.4592 L10.4118,14.4522 L24.4448,6.3502 L14.8528,0.8112 L0.8118,8.9172 Z M24.4448,6.3502 L24.4518,6.3542 L24.4518,6.3462 L24.4448,6.3502 Z M24.4518,6.3992 L24.4538,6.3552 L24.4518,6.3542 L24.4518,6.3992 Z"/>
        <path fill="#151746" d="M2.4362,8.9174 L10.4052,13.5184 L22.8202,6.3514 L14.8522,1.7494 L2.4362,8.9174 Z M1.6242,55.9044 L9.5992,60.5104 L9.5992,14.9274 L1.6242,10.3244 L1.6242,55.9044 Z M11.2242,14.9214 L11.2242,60.5924 L23.6402,53.4284 L23.6402,7.7524 L11.2242,14.9214 Z M10.4122,62.8114 C10.2722,62.8114 10.1312,62.7744 10.0062,62.7024 C9.9042,62.6444 9.8182,62.5644 9.7522,62.4734 L0.4062,57.0774 C0.1552,56.9334 0.0002,56.6644 0.0002,56.3734 L0.0002,8.9174 C0.0002,8.6274 0.1552,8.3584 0.4062,8.2144 L14.4462,0.1084 C14.6972,-0.0356 15.0072,-0.0356 15.2582,0.1084 L24.8602,5.6514 C25.1222,5.8024 25.2772,6.0874 25.2652,6.3884 L25.2652,53.8964 C25.2652,54.1874 25.1092,54.4554 24.8582,54.6004 L10.8172,62.7024 C10.6922,62.7744 10.5522,62.8114 10.4122,62.8114 Z"/>
        <polyline fill="#FFF" points="26.29 33.146 26.293 33.147 26.293 71 40.333 62.757 40.333 26.729 40.335 26.694 40.333 26.687 26.293 34.933 26.293 70.929 26.286 70.931"/>
        <polyline fill="#FFF" points="26.285 71 26.282 34.806 16.685 29.265 16.685 65.375 26.278 70.913 26.285 70.91"/>
        <polyline fill="#E6E6ED" points="40.325 26.747 40.327 26.703 30.725 21.16 16.685 29.265 26.282 34.806 26.285 34.809 26.285 34.8 40.325 26.695"/>
        <path fill="#151746" d="M18.3098,29.2661 L26.2788,33.8661 L38.6938,26.6991 L30.7258,22.0971 L18.3098,29.2661 Z M17.4978,64.9071 L25.4728,69.5111 L25.4728,35.2671 L17.4978,30.6711 L17.4978,64.9071 Z M27.0978,35.2691 L27.0978,69.5941 L39.5138,62.4291 L39.5148,28.0991 L27.0978,35.2691 Z M26.2858,71.8131 C26.1448,71.8131 26.0048,71.7771 25.8788,71.7041 C25.7778,71.6461 25.6918,71.5671 25.6258,71.4741 L16.2798,66.0791 C16.0288,65.9341 15.8728,65.6661 15.8728,65.3751 L15.8728,29.2661 C15.8728,28.9751 16.0288,28.7071 16.2798,28.5631 L30.3198,20.4561 C30.5708,20.3121 30.8808,20.3121 31.1318,20.4561 L40.7328,26.0001 C40.9848,26.1451 41.1398,26.4121 41.1398,26.7031 L41.1378,62.8991 C41.1378,63.1891 40.9828,63.4571 40.7318,63.6021 L26.6908,71.7041 C26.5658,71.7771 26.4248,71.8131 26.2858,71.8131 Z"/>
        <polyline fill="#FFF" points="42.227 80.271 56.268 72.167 56.268 44.325 42.227 52.431 42.227 80.18 42.22 80.183"/>
        <polyline fill="#FFF" points="42.159 80.084 42.156 52.249 32.559 46.709 32.559 74.459 42.151 79.997 42.159 79.994"/>
        <polyline fill="#E6E6ED" points="56.199 44.383 56.201 44.339 46.599 38.795 32.559 46.902 42.156 52.443 42.159 52.445 42.159 52.437 56.199 44.331"/>
        <path fill="#151746" d="M55.3864,71.7055 L42.9714,78.8705 L42.9714,52.9065 L55.3864,45.7375 L55.3864,71.7055 Z M42.1534,51.5035 L34.1834,46.9015 L46.5994,39.7335 L54.5684,44.3355 L42.1534,51.5035 Z M33.3714,74.1835 L33.3714,48.3085 L41.3464,52.9105 L41.3464,78.7875 L33.3714,74.1835 Z M56.6064,43.6365 L47.0054,38.0925 C46.7544,37.9475 46.4444,37.9475 46.1934,38.0925 L32.1534,46.1985 C31.9014,46.3435 31.7464,46.6115 31.7464,46.9015 L31.7464,74.6515 C31.7464,74.9415 31.9014,75.2105 32.1534,75.3545 L41.7454,80.8935 C41.8694,80.9645 42.0114,81.0005 42.1524,81.0005 C42.2354,81.0005 42.3184,80.9865 42.3984,80.9645 C42.4424,80.9495 42.4854,80.9325 42.5254,80.9115 L42.5654,80.9795 L56.6044,72.8775 C56.8564,72.7325 57.0114,72.4645 57.0114,72.1745 L57.0124,44.3715 C57.0244,44.0695 56.8674,43.7865 56.6064,43.6365 Z"/>
      </g>
      </svg>
  );
};


export default IconBars;
