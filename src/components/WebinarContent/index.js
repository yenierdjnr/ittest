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


const WebinarContent = () => {

  return (
    <section>

      <div className={ styles.container }>
        <Hx size="3" color={ styles.offBlack } className={ styles.header }>Upcoming Webinars</Hx>
        <div className={ styles.row }>
          <div className={ styles.sideCol }>
          </div>
          <div className={ styles.cols }>
            <Hx size="6"><a href="https://go.itpro.tv/ddosstory" color={ styles.title } target="_blank" rel="noopener noreferrer">Surviving a DDoS Attack: Our Story</a></Hx>
            <div className={ styles.content }>
              <img src={ Ddos } className={ styles.img } alt="DDOS webinar" />
              <Para color={ styles.darkGrey } className={ styles.summary }>What happens when an IT education company gets hit with a DDOS attack?</Para>
            </div>
            <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/ddosstory">Learn More</TextLinkExternal>
          </div>
          <div className={ styles.cols }>
          </div>
          <div className={ styles.sideCol }>
          </div>
        </div>
      </div>

      <div className={ styles.colorContainer }>
        <div className={ styles.wrapper }>
          <Hx size="3" color={ styles.offBlack } className={ styles.header }>Recent Webinars</Hx>
          <div className={ styles.row }>
            <div className={ styles.sideCol }>
            </div>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/hybrid-cloud-recording" color={ styles.title } target="_blank" rel="noopener noreferrer">Winning with The Hybrid Cloud</a></Hx>
              <div className={ styles.content }>
                <img src={ Hybrid } className={ styles.img } alt="Hybrid webinar" />
                <Para color={ styles.darkGrey } className={ styles.summary }>What IT pros need to know</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/hybrid-cloud-recording">Watch Here</TextLinkExternal>
            </div>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/pen_test_recording" color={ styles.title } target="_blank" rel="noopener noreferrer">Pen Testing: What IT Pros Need to Know</a></Hx>
              <div className={ styles.content }>
                <img src={ Pentest } className={ styles.img } alt="PenTesting webinar" />
                <Para color={ styles.darkGrey } className={ styles.summary }>Types of pen tests, tools, and ways to minimize your risk</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/pen_test_recording">Watch Here</TextLinkExternal>
            </div>
            <div className={ styles.sideCol }>
            </div>
          </div>

          <div className={ styles.row }>
            <div className={ styles.sideCol }>
            </div>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/minimize-risk" color={ styles.title } target="_blank" rel="noopener noreferrer">5 Things Every Company Should Be Doing to Protect Its Network</a></Hx>
              <div className={ styles.content }>
                <img src={ Network } className={ styles.img } alt="Network webinar" />
                <Para color={ styles.darkGrey } className={ styles.summary }>The checklist for IT pros</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/minimize-risk">Watch Here</TextLinkExternal>
            </div>
            <div className={ styles.cols }>
              <Hx size="6"><a href="https://go.itpro.tv/gdpr_webinar_recording" color={ styles.title } target="_blank" rel="noopener noreferrer">GDPR: What IT Pros Need to Know</a></Hx>
              <div className={ styles.content }>
                <img src={ Gdpr } className={ styles.img } alt="GDPR webinar" />
                <Para color={ styles.darkGrey } className={ styles.summary }>Tips to minimize your risk</Para>
              </div>
              <TextLinkExternal className={ styles.more } to="https://go.itpro.tv/gdpr_webinar_recording">Watch Here</TextLinkExternal>
            </div>
            <div className={ styles.sideCol }>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WebinarContent;
