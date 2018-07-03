import React, { Fragment } from 'react';

import Head from 'Components/Head';
import { Contact as Hero } from 'Components/Hero';
import ContactContent from 'Components/ContactContent';
import ContactSupport from 'Components/ContactSupport';
import ContactMaps from 'Components/ContactMaps';
import styles from './contact.module.scss';


const Contact = ({ data, history, location, match, page, pageResources, pageContext, staticContext }) => 
  <Fragment>
    <Head location={ location }/>
    <main className={ styles.contact }>

      <section className={ styles.Hero }>
        <Hero />
      </section>

      <section className={ styles.ContactContent }>
        <ContactContent />
      </section>

      <section className={ styles.ContactSupport }>
        <ContactSupport />
      </section>

      <section className={ styles.ContactMaps }>
        <ContactMaps />
      </section>

    </main>
  </Fragment>
  


export default Contact;
