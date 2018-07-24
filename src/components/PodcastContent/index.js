import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLinkExternal from 'Elements/TextLinkExternal';
import technadoLogo from 'Images/technado_logo.png';
import askSmeLogo from 'Images/ask_sme_logo.png';


const PodcastContent = () => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.colLeft }>
        <img className={ styles.podcastLogo } src={ technadoLogo } alt="Technado Powered by ITProTV" />
        <div className={ styles.row }>
          <div className={ styles.col12 }>
            <Hx styles={ styles.subtitle } className={ styles.podcastName } color={ styles.offBlack } size="3">Technado: The Weekly Tech News Wrap-up</Hx>
            <Para styles={ styles.summary } color={ styles.offBlack }>What's happening in the tech world and how does it impact you as an IT professional? Tune in to Technado to hear the latest. With 30+ years in IT, host Don Pezet guides you through the headlines while 'everyman' Peter VanRysdam voices the questions you're too shy to ask.</Para>
            <TextLinkExternal to={'https://www.youtube.com/watch?v=qdEyJMtaCQ8&list=PLc6zqGSJMvCToPZyiFFH6MueIJRhOtKxv'} className={ styles.link }>Watch Now</TextLinkExternal>
          </div>
        </div>
      </div>
      <div className={ styles.colRight }>
        <img className={ styles.podcastLogo } src={ askSmeLogo } alt="Ask SME Anything" />
        <div className={ styles.row }>
          <div className={ `${styles.col12} ${styles.askSME}` }>
            <Hx styles={ styles.subtitle } className={ styles.podcastName } color={ styles.offBlack } size="3">Ask SME Anything: Q&amp;A with IT Experts</Hx>
            <Para styles={ styles.summary } color={ styles.offBlack }>Got a burning IT question? This is your time to ask to ITProTV hosts. Host Don Pezet fields your questions and deals them out to the ITProTV team. Cloud, Microsoft, security, dev ops and more. Submit on Twitter to @ITProTV using #askSMEanything and get your answer.</Para>
            <TextLinkExternal to={'https://www.youtube.com/watch?v=XkiX1EJihpI&list=PLc6zqGSJMvCSutM_WUhpkjKkSG68nZdz4'} className={ styles.link }>Watch Now</TextLinkExternal>
          </div>
        </div>
      </div>
    </section>
  );
};


export default PodcastContent;
