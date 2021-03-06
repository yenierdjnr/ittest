import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLinkExternal from 'Elements/TextLinkExternal';

const Resource = ({ title, description, url, imgSrc='' }) =>
  <div className={ styles.cols }>
    <Hx size="6"><a href={ `${url}` } color={ styles.title } target="_blank" rel="noopener noreferrer">{ title }</a></Hx>
    <div className={ styles.content }>
      { imgSrc && <img src={ `${imgSrc}` } className={ styles.img } alt="" /> }
      <Para color={ styles.darkGrey } className={ styles.summary }>{ description }</Para>
    </div>
    <TextLinkExternal className={ styles.more } to={url}>Read more</TextLinkExternal>
  </div>
  ;


export default Resource;
