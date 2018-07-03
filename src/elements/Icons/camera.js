import React from 'react';
import Link from 'gatsby-link';


const IconCamera = (props) => {
  const { className='', fill='#FFFFFF' } = props;

  return (
    <svg width="68" height="81" viewBox="0 0 68 81">
      <g fill={ fill } fillRule="evenodd">
        <polygon fill="#E6E6ED" points="63.883 30.83 29.502 50.716 9.883 38.904 44.164 18.553"/>
        <path fill="#FFF" d="M29.5023,50.716 L8.9173,39.479 C8.9173,39.479 8.0253,41.323 8.0253,43.691 L8.0253,66.289 L28.5793,79.074 C28.5793,79.074 28.1433,57.021 28.5793,54.813 C29.0163,52.605 29.5023,50.716 29.5023,50.716"/>
        <path fill="#FFF" d="M63.5106,60.8986 L31.2796,79.5066 C29.7886,80.3676 28.5986,79.4876 28.6236,77.5416 L28.9086,54.5216 C28.9326,52.5756 30.1606,50.2996 31.6526,49.4386 L63.8836,30.8306 C65.3746,29.9696 66.5636,30.8496 66.5386,32.7956 L66.2536,55.8156 C66.2296,57.7616 65.0016,60.0376 63.5106,60.8986"/>
        <path fill="#151746" d="M65.0394,55.7394 C65.0394,57.2974 64.0514,59.2334 62.9244,59.8844 L30.6944,78.4934 C30.4714,78.6214 30.2814,78.6614 30.1614,78.6364 L30.0154,78.5514 C29.8944,78.4064 29.7504,78.0794 29.7504,77.4664 L29.7504,54.8134 C29.7504,53.2564 30.7384,51.3194 31.8644,50.6684 L64.0954,32.0594 C64.2824,31.9524 64.4584,31.8934 64.5804,31.8934 C64.6174,31.8934 64.6454,31.9014 64.6724,31.9124 L64.7104,31.9354 C64.8344,32.0254 65.0394,32.3544 65.0394,33.0874 L65.0394,55.7394 Z M10.1404,66.3334 C9.8834,66.4804 9.6504,66.5314 9.5444,66.4754 C9.4244,66.4054 9.1964,66.0724 9.1964,65.3054 L9.1964,42.6524 C9.1964,42.1214 9.3184,41.5474 9.5144,40.9944 L28.0534,51.8894 C27.6514,52.8314 27.4084,53.8444 27.4084,54.8134 L27.4084,77.0434 L10.7554,67.3984 L10.1404,66.3334 Z M11.3104,38.5084 L43.5404,19.8994 C43.7974,19.7504 44.0314,19.6924 44.1384,19.7574 C44.2584,19.8274 44.4854,20.1604 44.4854,20.9264 L46.1614,20.9264 L62.2044,30.4484 L30.6944,48.6404 C30.1784,48.9384 29.6994,49.3754 29.2684,49.8874 L10.7224,38.9884 C10.9114,38.7964 11.1064,38.6264 11.3104,38.5084 Z M66.0804,30.0674 L66.0984,30.0354 L65.8894,29.9114 C65.8794,29.9054 65.8724,29.8944 65.8624,29.8884 C65.8524,29.8844 65.8414,29.8824 65.8314,29.8774 L45.3254,17.7074 L45.3104,17.7304 C45.3104,17.7304 45.3094,17.7294 45.3084,17.7284 C44.4544,17.2374 43.3824,17.2884 42.3714,17.8714 L10.1404,36.4804 C8.2974,37.5454 6.8544,40.2554 6.8544,42.6524 L6.8544,65.3054 C6.8544,66.7804 7.4084,67.9454 8.3734,68.5034 C8.3824,68.5094 8.3924,68.5104 8.4004,68.5144 L8.3024,68.6844 L28.7874,80.5494 C28.8374,80.5824 28.8744,80.6344 28.9274,80.6644 C28.9914,80.7004 29.0614,80.7154 29.1274,80.7454 L29.1834,80.7784 L29.1874,80.7704 C29.5084,80.9094 29.8464,81.0004 30.2034,81.0004 C30.7444,81.0004 31.3134,80.8394 31.8644,80.5204 L64.0954,61.9124 C65.9374,60.8494 67.3814,58.1374 67.3814,55.7394 L67.3814,33.0874 C67.3814,31.7364 66.8994,30.6704 66.0804,30.0674 Z"/>
        <path fill="#FFF" d="M5.0468,57.4542 C5.0468,57.4542 9.1358,60.4142 10.0508,63.6422 C10.9658,66.8712 11.8798,71.4982 11.5038,72.4672 C11.1268,73.4342 22.4808,66.1422 22.4808,66.1422 C22.4808,66.1422 23.6408,60.3072 22.1728,57.8312 C20.7048,55.3562 18.3048,51.4292 16.5718,51.6972 C14.8398,51.9662 5.0468,57.4542 5.0468,57.4542"/>
        <path fill="#E6E6ED" d="M11.7489,69.1954 C11.7489,73.0904 9.3809,74.8804 6.4599,73.1944 C3.5399,71.5084 1.1709,66.9834 1.1709,63.0894 C1.1709,59.1944 3.5399,57.4044 6.4599,59.0914 C9.3809,60.7764 11.7489,65.3004 11.7489,69.1954"/>
        <path fill="#151746" d="M20.6698,65.9933 L20.6708,65.9953 L12.8018,70.4743 C12.8598,70.0613 12.9198,69.6493 12.9198,69.1963 C12.9198,64.8633 10.3388,59.9783 7.0448,58.0773 C6.9648,58.0303 6.8848,58.0113 6.8038,57.9683 L14.8488,53.4213 C15.6198,52.8273 16.6138,53.1833 17.3108,53.5863 C19.8598,55.0583 22.0138,59.2223 22.0138,62.6773 C22.0138,64.3513 21.5118,65.5913 20.6698,65.9933 M7.0448,72.1803 C4.4958,70.7083 2.3418,66.5453 2.3418,63.0893 C2.3418,61.4953 2.8068,60.2743 3.5848,59.8253 C3.8318,59.6823 4.0978,59.6253 4.3648,59.6253 C4.9048,59.6253 5.4518,59.8603 5.8748,60.1043 C8.4238,61.5773 10.5778,65.7413 10.5778,69.1963 C10.5778,70.7633 10.1258,71.9603 9.3718,72.4273 L9.2858,72.4753 C8.5478,72.8653 7.6638,72.5383 7.0448,72.1803 M24.3558,62.6773 C24.3558,58.3443 21.7748,53.4593 18.4808,51.5573 C16.8048,50.5913 15.1268,50.5193 13.7948,51.3233 L2.1728,57.9983 C0.8028,58.9473 -0.0002,60.7593 -0.0002,63.0893 C-0.0002,67.4223 2.5808,72.3063 5.8748,74.2093 C6.7898,74.7363 7.7028,75.0023 8.5638,75.0023 C9.1958,75.0023 9.7948,74.8403 10.3488,74.5533 L10.3548,74.5613 L10.4278,74.5193 C10.4528,74.5063 10.4808,74.5023 10.5058,74.4873 C10.5228,74.4773 10.5348,74.4593 10.5518,74.4493 L21.9918,67.9203 C23.4938,67.0213 24.3558,65.1433 24.3558,62.6773"/>
        <path fill="#E6E6ED" d="M56.9388 10.0304C56.9388 17.4754 52.4118 26.1254 46.8278 29.3494 41.2438 32.5734 36.7168 29.1514 36.7168 21.7054 36.7168 14.2594 41.2438 5.6104 46.8278 2.3864 52.4118-.8376 56.9388 2.5854 56.9388 10.0304M36.7167 21.5656C36.7167 29.0106 32.1897 37.6606 26.6057 40.8836 21.0217 44.1086 16.4947 40.6866 16.4947 33.2406 16.4947 25.7946 21.0217 17.1456 26.6057 13.9216 32.1897 10.6976 36.7167 14.1196 36.7167 21.5656"/>
        <path fill="#151746" d="M54.5087,1.1573 C54.4537,1.1153 54.3907,1.0743 54.3287,1.0323 L54.2167,0.9553 L54.2147,0.9583 C54.1517,0.9193 54.0987,0.8783 54.0297,0.8393 C51.8147,-0.4427 49.0497,-0.2487 46.2427,1.3723 C40.3437,4.7783 35.5457,13.8983 35.5457,21.7053 C35.5457,26.0493 37.0327,29.3983 39.6257,30.8963 C40.5937,31.4563 41.6697,31.7333 42.8067,31.7333 C44.2687,31.7333 45.8347,31.2743 47.4127,30.3633 L46.2427,28.3353 C44.1607,29.5393 42.2757,29.7253 40.7967,28.8683 C38.9477,27.8013 37.8877,25.1893 37.8877,21.7053 C37.8877,14.6453 42.1607,6.4323 47.4127,3.3993 C49.4977,2.1973 51.3817,2.0123 52.8587,2.8663 C52.8657,2.8713 52.8747,2.8743 52.8827,2.8783 L52.8817,2.8783 L56.9067,5.6703 L58.2427,3.7463 L54.5087,1.1573 Z"/>
        <path fill="#FFF" d="M40.6644 24.3029C40.6644 31.7489 36.1374 40.3989 30.5534 43.6219 24.9694 46.8469 20.4424 43.4239 20.4424 35.9789 20.4424 28.5329 24.9694 19.8839 30.5534 16.6589 36.1374 13.4359 40.6644 16.8579 40.6644 24.3029M60.8866 12.7687C60.8866 20.2137 56.3596 28.8637 50.7756 32.0867 45.1916 35.3117 40.6646 31.8887 40.6646 24.4437 40.6646 16.9977 45.1916 8.3487 50.7756 5.1237 56.3596 1.9007 60.8866 5.3227 60.8866 12.7687"/>
        <path fill="#151746" d="M54.7821,5.0773 C53.7381,5.0773 52.5841,5.4323 51.3601,6.1393 C46.1081,9.1703 41.8361,17.3833 41.8361,24.4423 C41.8361,27.9293 42.8961,30.5403 44.7451,31.6073 C46.2241,32.4583 48.1071,32.2753 50.1901,31.0733 C55.4421,28.0413 59.7151,19.8293 59.7151,12.7683 C59.7151,9.2833 58.6551,6.6723 56.8051,5.6053 C56.1951,5.2533 55.5161,5.0773 54.7821,5.0773 M46.7551,34.4713 C45.6171,34.4713 44.5431,34.1933 43.5741,33.6363 C40.9811,32.1373 39.4931,28.7883 39.4931,24.4423 C39.4931,16.6363 44.2921,7.5153 50.1901,4.1103 C52.9971,2.4913 55.7621,2.3023 57.9761,3.5763 C60.5701,5.0743 62.0571,8.4243 62.0571,12.7683 C62.0571,20.5753 57.2591,29.6953 51.3601,33.1003 C49.7811,34.0123 48.2161,34.4713 46.7551,34.4713"/>
        <path fill="#151746" d="M29.9681,42.6076 C27.8851,43.8096 26.0011,43.9956 24.5221,43.1426 C22.6731,42.0746 21.6131,39.4626 21.6131,35.9796 C21.6131,28.9176 25.8861,20.7056 31.1381,17.6736 C32.3621,16.9666 33.5161,16.6126 34.5601,16.6126 C35.2941,16.6126 35.9731,16.7876 36.5841,17.1406 C38.4331,18.2086 39.4931,20.8196 39.4931,24.3036 C39.4931,31.3636 35.2201,39.5766 29.9681,42.6076 M17.6661,33.2406 C17.6661,26.1796 21.9381,17.9676 27.1901,14.9356 C29.2751,13.7336 31.1581,13.5486 32.6351,14.4036 L32.6391,14.3976 L32.7921,14.5026 C31.8681,14.7226 30.9221,15.0946 29.9681,15.6456 C24.0701,19.0506 19.2711,28.1716 19.2711,35.9796 C19.2711,37.3346 19.4311,38.5776 19.7091,39.7126 C18.4041,38.4066 17.6661,36.1316 17.6661,33.2406 M37.8801,15.2006 L37.8871,15.1896 L33.8061,12.3736 C31.5921,11.0986 28.8271,11.2896 26.0201,12.9086 C20.1221,16.3136 15.3231,25.4336 15.3231,33.2406 C15.3231,37.2446 16.5991,40.3826 18.8271,42.0266 L22.8411,44.8366 L22.8521,44.8196 C23.0181,44.9376 23.1761,45.0686 23.3511,45.1706 C24.3201,45.7286 25.3941,46.0076 26.5321,46.0076 C27.9931,46.0076 29.5591,45.5486 31.1381,44.6356 C37.0371,41.2306 41.8361,32.1106 41.8361,24.3036 C41.8361,20.0346 40.3921,16.7346 37.8801,15.2006"/>
      </g>
    </svg>
  );
};


export default IconCamera;
