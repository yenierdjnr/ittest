import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import Adam from 'Images/adam.jpg';
import Aubri from 'Images/aubri.jpg';
import Cherokee from 'Images/cherokee.jpg';
import Daniel from 'Images/daniel.jpg';
import Don from 'Images/don.jpg';
import Jo from 'Images/jo.jpg';
import Justin from 'Images/justin.jpg';
import Mike from 'Images/mike.jpg';
import Ronnie from 'Images/ronnie.jpg';
import Vonne from 'Images/vonne.jpg';
import Wes from 'Images/wes.jpg';
import Zach from 'Images/zach.jpg';


const EdutainersContent = props => {
  return (
    <section className={ styles.capsule }>
      <div className={ styles.row }>
        <Hx size="1" className={ styles.subtitle } color={ styles.offBlack }>Meet the Edutainers</Hx>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Adam } alt="Adam Gordon photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Adam Gordon</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Adam has 30+ years as an IT instructor in the private and public sectors. He holds more than 160 IT certifications. He has trained thousands of IT pros over the course of his career.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: 160+</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Cherokee } alt="Cherokee Boose photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Cherokee Boose</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Cherokee started as a computer technician and moved to a network administrator role. Her love for learning is what pushed her towards a career in IT education.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: MCSE Cloud Platform and Infrastructure; MCSA: Server 2012; MCT; MCP; MTA: Networking Fundamentals; MTA: Windows Operating System Fundamentals; Six Sigma Green Belt; CompTIA A+, A+ CE, Network+, CTT+, and Cloud+</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Daniel } alt="Daniel Lowrie photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Daniel Lowrie</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>After working professionally as a systems administrator and as a network administrator, Daniel switched to IT education.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: CompTIA A+, Network+, Linux+, and CySA+; CEH; MCSA</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Don } alt="Don Pezet photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Don Pezet</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Don has been working in the IT industry for more than 18 years and in training for more than 12 years. He is the co-founder of ITProTV. Don is certified by many vendors including Microsoft and Cisco.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: CompTIA A+, Network+, Security+; CVE, CCNA; CCNP; JNCIA; JNCIS; PMP; HP Master ASE; MCP; MCSE; MCSA; MCTS; MCITP; LPIC-2</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Jo } alt="Jo Peacock photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Jo Peacock</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Jo is a leading visionary in the fields of IT service and project management. Internationally recognized, Jo has directed transformational projects for blue-chip organizations, federal government agencies, and the world's leading educational establishments.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: 22 ITIL certifications in v2, v3, 2011; 4 Agile certifications; Prince2 Foundation &amp; Practitioner; ISO/IEC 20,000 Foundation &amp; Practitioner; PMP; SIAM Foundation &amp; Practitioner; MoR Foundation &amp; Practitioner; MCSE; CNE; AIX Administrator</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Justin } alt="Justin Dennison photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Justin Dennison</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Justin leads the content development for the DevProTV channel. He has experience in multiple programming languages.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: AWS Certified Solutions Architect - Associate; AWS Certified Developer - Associate; AWS Certified Cloud Practitioner; Oracle Certified Associate, Java SE 7 Programmer</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Mike } alt="Mike Rodrick photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Mike Rodrick</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Mike has more than 10 years of IT instruction experience, and has been an ITProTV Edutainer since 2014.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: Master MOS Office 2002 Certification (Access, Excel, Outlook, PowerPoint, Word); MOS Master Trainer; CompTIA A+, Network+, Security+; Project+; MCP; MCT; MCDST; MCITP; MCTS; MCSA; MCSE; MCDBA; Certified Ethical Hacker; Certified Wireless Administrator, CIW</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Ronnie } alt="Ronnie Wong photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Ronnie Wong</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Ronnie has more than 20 years experience working with computers and technology, and more than 10 years as a technical instructor.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: MCSA(2003); MCSA(Windows7); MCSA(Windows 8); MCTS (Vista, 7); CompTIA A+, Security+, Network+,; IT Technician; CCNA Security; MCT; CCSI #33442</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Vonne } alt="Vonne Smith photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Vonne Smith</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Vonne leads the content development for the OfficeProTV and CreativeProTV channels. She has extensive experience in graphic and web design.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: MOS 2007; ACE in CS5; ACI in CS5</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Wes } alt="Wes Bryan photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Wes Bryan</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Wes began his IT career path in 2009 and subsequently became an IT instructor. In his first years of teaching, he won a global teaching award 3 times.</Para>
          <Para className={ styles.cert } color={ styles.greyDark }>Certifications: CompTIA A+, Network+, Security+, Server+, Cloud+, CySA+; MCSA Windows 8, 8.1, and 10; MTA; MCTS; MCP; MS; MCT</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Zach } alt="Zach Memos photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Zach Memos</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Zach is a show host with 30+ years of on-camera experience. He brings his wit and charm to the camera while helping bring out the best in the ITProTV subject matter experts.</Para>
        </div>
      </div>
      <div className={ styles.wrapper }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.headshot } src={ Aubri } alt="Aubri Spurgin-Kabinu photo" />
        </div>
        <div className={ styles.content }>
          <Para className={ styles.name } color={ styles.offBlack }>Aurbianna Spurgin-Kabinu</Para>
          <Para className={ styles.bio } color={ styles.offBlack }>Aubri combines her background in telecommunication with her passion for learning as an ITProTV show host. She works with the ITProTV subject matter experts to help members grow in their IT careers.</Para>
        </div>
      </div>
    </section>
  );
};


export default EdutainersContent;
