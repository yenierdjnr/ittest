import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLinkExternal from 'Elements/TextLinkExternal';

const Resource = ({ className='', title, description, url }) => {

  return (
    <div>
      <Hx color={ styles.headingColor } size="6">{ title }</Hx>
      <Para color={ styles.darkGrey } className={ styles.summary }>{ description }</Para>
      <TextLinkExternal to={url}>Read more</TextLinkExternal>
    </div>
  );
};


export default Resource;
