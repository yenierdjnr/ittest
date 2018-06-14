import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const AboutStory= props => {
  return (
    <section className={ styles.container }>
        <Hx className={ styles.subtitle } color={ styles.offBlack }>The ITProTV Story</Hx>
        <Para className={ styles.storyContent } color={ styles.greyDark } >Founders Tim Broom and Don Pezet operated a brick-and-mortar classroom training franchise for years, but felt that video training was the future. They also recognized the global shortage of IT professionals and saw that this was a market that was under-served. Together they conceptualized ITProTV with inspiration from the show The Screen Savers. They knew they wanted to provide training that was effective, but they wanted to have elements that made the training enjoyable and even... entertaining. With attractive studios, a two-host format, and interaction from a live streaming audience, they combined the best of classroom and online learning. ITProTV launched in 2014 and the company has grown exponentially since, now serving more than 100,000 members.</Para>
    </section>
  );
};


export default AboutStory;
