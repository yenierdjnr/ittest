import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLinkExternal from 'Elements/TextLinkExternal';
import Pentest from 'Images/pentest.jpg';
import Gdpr from 'Images/gdpr.jpg';
import Network from 'Images/network.png';
import Hybrid from 'Images/hybridcloud.png';
import Ddos from 'Images/ddos.png';


const WebinarContent = ({ className='', title, description, url, imgSrc='' }) => {

  return (
    <section>

      <div className={ styles.container }>
        <Hx size="3" color={ styles.offBlack } className={ styles.header }>Upcoming Webinars</Hx>

        <div className={ styles.row }>
          <div className={ styles.cols }>
            <Hx size="6"><a href="https://go.itpro.tv/hybrid-cloud-recording" color={ styles.title } target="_blank">Winning with The Hybrid Cloud</a></Hx>
            <div className={ styles.content }>
              <img src={ Hybrid } className={ styles.img } />
              <Para color={ styles.darkGrey } className={ styles.summary }>What IT pros need to know</Para>
            </div>
            <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/hybrid-cloud-recording">Register</TextLinkExternal>
          </div>
          <div className={ styles.centerCol }>
          </div>
          <div className={ styles.cols }>
            <Hx size="6"><a href={ `${url}` } color={ styles.title } target="_blank">Surviving a DDOS Attack: A Case Study</a></Hx>
            <div className={ styles.content }>
              <img src={ Ddos } className={ styles.img } />
              <Para color={ styles.darkGrey } className={ styles.summary }>What happened and how we got through it</Para>
            </div>
            <TextLinkExternal className={ styles.more } to={url}>Register</TextLinkExternal>
          </div>
        </div>
      </div>

      <div className={ styles.colorContainer }>
        <div className={ styles.wrapper }>
          <Hx size="3" color={ styles.offBlack } className={ styles.header }>Recent Webinars</Hx>

          <div className={ styles.row }>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/gdpr_webinar_recording" color={ styles.title } target="_blank">GDPR: What IT Pros Need to Know</a></Hx>
              <div className={ styles.content }>
                <img src={ Gdpr } className={ styles.img } />
                <Para color={ styles.darkGrey } className={ styles.summary }>Tips to minimize your risk</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/gdpr_webinar_recording">Watch Here</TextLinkExternal>
            </div>
            <div className={ styles.centerCol }>
            </div>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/pen_test_recording" color={ styles.title } target="_blank">Pen Testing: What IT Pros Need to Know</a></Hx>
              <div className={ styles.content }>
                <img src={ Pentest } className={ styles.img } />
                <Para color={ styles.darkGrey } className={ styles.summary }>Types of pen tests, tools, and ways to minimize your risk</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/pen_test_recording">Watch Here</TextLinkExternal>
            </div>
          </div>

          <div className={ styles.row }>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/minimize-risk" color={ styles.title } target="_blank">5 Things Every Company Should Be Doing to Protect Its Network</a></Hx>
              <div className={ styles.content }>
                <img src={ Network } className={ styles.img } />
                <Para color={ styles.darkGrey } className={ styles.summary }>The checklist for IT pros</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/minimize-risk">Watch Here</TextLinkExternal>
            </div>
            <div className={ styles.centerCol }>
            </div>
            <div className={ styles.cols }>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WebinarContent;
