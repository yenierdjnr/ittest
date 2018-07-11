import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLinkExternal from 'Elements/TextLinkExternal';
import Pentest from 'Images/pentest.jpg';
import Gdpr from 'Images/gdpr.jpg';

const WebinarContent = ({ className='', title, description, url, imgSrc='' }) => {

  return (
    <section>
      <div className={ styles.row }>
        <div className={ styles.cols }>
          <Hx size="6"><a href={ `${url}` } color={ styles.title } target="_blank">Pen Testing</a></Hx>
          <div className={ styles.content }>
            <img src={ Pentest } className={ styles.img } />
            <Para color={ styles.darkGrey } className={ styles.summary }>Types of pen tests, tools, and ways to minimize your risk</Para>
          </div>
          <TextLinkExternal className={ styles.more } to={url}>Watch Here</TextLinkExternal>
        </div>
        <div className={ styles.cols }>
          <Hx size="6"><a href={ `${url}` } color={ styles.title } target="_blank">GDPR</a></Hx>
          <div className={ styles.content }>
            <img src={ Gdpr } className={ styles.img } />
            <Para color={ styles.darkGrey } className={ styles.summary }>Tips to minimize your risk</Para>
          </div>
          <TextLinkExternal className={ styles.more } to={url}>Watch Here</TextLinkExternal>
        </div>
      </div>
      <div className={ styles.row }>
        <div className={ styles.cols }>
          <Hx size="6"><a href={ `${url}` } color={ styles.title } target="_blank">5 Things Every Company Should Be Doing to Protect Its Network</a></Hx>
          <div className={ styles.content }>
            <img src={ Pentest } className={ styles.img } />
            <Para color={ styles.darkGrey } className={ styles.summary }>The checklist for IT pros</Para>
          </div>
          <TextLinkExternal className={ styles.more } to={url}>Watch Here</TextLinkExternal>
        </div>
        <div className={ styles.cols }>
          <Hx size="6"><a href={ `${url}` } color={ styles.title } target="_blank">Winning with The Hybrid Cloud</a></Hx>
          <div className={ styles.content }>
            <img src={ Gdpr } className={ styles.img } />
            <Para color={ styles.darkGrey } className={ styles.summary }>What IT pros need to know</Para>
          </div>
          <TextLinkExternal className={ styles.more } to={url}>Watch Here</TextLinkExternal>
        </div>
      </div>
    </section>
  );
};


export default WebinarContent;
