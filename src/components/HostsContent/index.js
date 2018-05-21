import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import Adam from 'Images/adam.jpg';
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


const HostsContent = props => {
  return (
    <section className={ styles.container }>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Adam } alt="Adam Gordon photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Adam Gordon</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Adam has 30+ years as an IT instructor in the private and public sectors. He holds more than 160 IT certifications. He has trained thousands of IT pros over the course of his career.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: 160+</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Cherokee } alt="Cherokee Boose photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Cherokee Boose</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Cherokee started as a computer technician and moved to a network administrator role. Her love for learning is what pushed her towards a career in IT education.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: Six Sigma Green Belt; CompTIA A+, A+ CE, Network+; MCT; MCSA: Server 2012; MTA: Networking Fundamentals; MCPS: Microsoft Certified Professional; MTA: Windows Operating System Fundamentals; CTT+; MCSE Cloud Platform and Infrastructure</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Daniel } alt="Daniel Lowrie photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Daniel Lowrie</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>After working professionally as a systems administrator and as a network administrator, Daniel switched to IT education.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: A+, Network+, Linux+, CEH, MCSA</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Don } alt="Don Pezet photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Don Pezet</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Don has been working in the IT industry for more than 18 years and in training for more than 12 years. He is the co-founder of ITProTV. Don is certified by many vendors including Microsoft and Cisco.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: A+, Network+, Security+, CVE, CCNA, CCNP, JNCIA, JNCIS, PMP, HP Master ASE, MCP, MCSE, MCSA, MCTS, MCITP, and LPIC-2</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Jo } alt="Jo Peacock photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Jo Peacock</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Jo is a leading visionary in the fields of IT service and project management. Internationally recognized, Jo has directed transformational projects for blue-chip organizations, federal government agencies, and the worlds’ leading educational establishments.</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Justin } alt="Justin Dennison photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Justin Dennison</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Justin leads the content development for the DevProTV channel. He has experience in multiple programming languages.</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Mike } alt="Mike Rodrick photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Mike Rodrick</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Mike has more than 10 years of IT instruction experience, and has been an ITProTV Edutainer since 2014.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: Master MOS Office 2002 Certification (Access, Excel, Outlook, PowerPoint, Word), MOS Master Trainer, CompTIA A+, Network+, Security+; Project+, MCP, MCT, MCDST, MCITP, MCTS, MCSA, MCSE, MCDBA, Certified Ethical Hacker, Certified Wireless Administrator, CIW</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Ronnie } alt="Ronnie Wong photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Ronnie Wong</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Ronnie has more than 20 years experience working with computers and technology, more than 10 years as a technical instructor.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: MCSA(2003), MCSA(Windows7), MCSA(Windows 8), MCTS (Vista, 7), Security+, Network+, A+ IT Technician, CCNA Security, MCT, CCSI #33442</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Vonne } alt="Vonne Smith photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Vonne Smith</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Vonne leads the content development for the OfficeProTV and CreativeProTV channels. She has extensive experience in graphic and web design.</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Wes } alt="Wes Bryan photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Wes Bryan</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Wes began his IT career path in 2009 and subsequently became an IT instructor. In first years of teaching, he won a global teaching award 3 times.</Para>
            <Para className={ styles.title } color={ styles.greyDark }>Certifications: CompTIA A+, A+ ce, Network+, Network+ ce, Security+, Security+ ce; MCTS Vista Client, MCTS Server 2008, MCSA Windows 8, MCSA Windows 8.1, MCT, MCP, MTA, Server+</Para>
          </div>
        </div>
        <div className={ styles.wrapper }>
          <img className={ styles.headshot } src={ Zach } alt="Zach Memos photo" />
          <div className={ styles.content }>
            <Para className={ styles.name } color={ styles.offBlack }>Zach Memos</Para>
            <Para className={ styles.bio } color={ styles.offBlack }>Zach is a show host with 30+ years of on-camera experience. He brings his wit and charm to the camera while helping bring out the best in the ITProTV subject matter experts.</Para>
          </div>
        </div>
    </section>
  );
};


export default HostsContent;
