import React, { Fragment } from 'react';

import Hero from 'Components/Hero';
import Card from 'Components/Card';

import styles from './homePage.module.scss';

const greenDark = '#469E24';
const orangeDark = '#E94D03';

const HomePage = props => {
  return (
    <main className={ styles['home'] }>

      <Hero className={ styles['home__Hero'] } />

      <section className={ styles['home__For'] }>
        <Card className={ styles['left'] } btmBarColor={ greenDark }>
          <span className={ styles['teams'] }>For Teams</span>
          <h2 className={ styles['head-one'] }>Learning Your Team Will Actually Use</h2>
          <p>Empower your team with the IT skills<br/>they need.</p>
        </Card>
        <Card className={ styles['right'] } btmBarColor={ orangeDark }>
          <span className={ styles['individuals'] }>Individuals</span>
          <h2 className={ styles['head-one'] }>Training to Accelerate Your Career</h2>
          <p>Get the skills you need from an expansive course library.</p>
        </Card>
      </section>

      <section className={ styles['home__Engagements'] }>
        <div className={ styles['courses'] }>
          <div className={ styles['left'] }>
            <img src="" alt="courses" />
          </div>
          <div className={ styles['right'] }>
            <span>_01</span>
            <h2>Library of Engaging Courses</h2>
            <p>From CompTIA, Cisco, and Microsoft to Security and Cloud<br/>Fundamentals, you can learn it all. You'll watch more and learn<br/>more with the friendly faces of IT.</p>
            <a href={ styles['#'] }>browse course library</a>
          </div>
        </div>
        <div className={ styles['labs'] }>
          <div className={ styles['left'] }>
            <span>_02</span>
            <h2>Hands-on Learning with Hosted Virtual Labs</h2>
            <p>Try out your skills on virtual machine labs with multiple instances of<br/>Windows Server and Desktop Clients on your OSX, Linux, iOS device,<br/>and Windows platform.</p>
            <a href={ styles['#'] }>view vitural labs</a>
          </div>
          <div className={ styles['right'] }>
            <img src="" alt="labs" />
          </div>
        </div>
        <div className={ styles['exams'] }>
          <div className={ styles['left'] }>
            <img src="" alt="'exams" width="316" height="299" />
          </div>
          <div className={ styles['right'] }>
            <span>_03</span>
            <h2>Pass Certifications with<br/>Practice Exams</h2>
            <p>Prepare for tough certification examinations with current tests from<br/>Transcender®. Take and re-take to ensure you're ready before you sit<br/>for the exam.</p>
            <a href={ styles['#'] }>see practice tests</a>
          </div>
        </div>
      </section>

      <section className={ styles['stats-container'] }>STATS</section>

      <section className={ styles['video-container'] }>VIDEO</section>

      <section className={ styles['testimonials-container'] }>TESTIMONIALS</section>

      <section className={ styles['get-started-container'] }>GET STARTED</section>

      <section className={ styles['get-my-copy'] }>GET MY COPY</section>
    </main>
  );
}


export default HomePage;
