import React from 'react';
import styles from './styles.module.scss';

import Carousel from 'Elements/Carousel';
import QuoteCard from 'Components/QuoteCard';


const ForTeamsTestimonials = props => {
  return (
    <div className={ styles.container }>
      <Carousel>
        <QuoteCard
          title=""
          quote="We are using ITProTV to get our team trained up on the latest Microsoft Technologies. I myself am using ITProTV to learn about Windows Server 2016 and Microsoft Exchange 2016, two technologies we are implementing in our new datacenter. If you are an individual looking to earn certifications and technical training, or a company who wants to train up your staff, ITProTV is the way to go by far."
          attribution="Kevin Gamin, Vice President of Service at One World Technology"
        />
        <QuoteCard
          title=""
          quote="There is an excellent variety of courses available. Completion of coursework has improved knowledge and understanding of the tasks my staff perform each day, and I couldn’t be happier."
          attribution="Jim Ford, VP of Information Technology"
        />
        <QuoteCard
          title=""
          quote="We are using this program to train the IT staff. This provides us with the opportunity to keep our staff informed and broaden our understanding of new concepts."
          attribution="Jim Barber, Manager of Information Systems"
        />
        <QuoteCard
          title=""
          quote="ITProTV is GREAT for smaller teams looking for a cost-effective solution to help their team members skill-up and stay up-to-date on current tech and certifications. It’s equally good for larger teams who wish to have a readily available resource for their team members to access and train."
          attribution="John-David Sayle, IT System Administrator"
        />
        <QuoteCard
          title=""
          quote="My team is moving faster than ever before. If I tallied the consulting expense of the changes we have made on our own, ITProTV probably would have paid for itself in the first 30 days."
          attribution="Dana Morrison, IT Director"
        />
        <QuoteCard
          title=""
          quote="Overall the training format and tools that they provide makes them immensely helpful and an extremely good value. Add that to the constantly updated and expanding selection of topics they cover makes it a one-stop-shop for anyone wanting to learn the many aspects of the IT Industry."
          attribution="Charles Morgan, CEO and Founder"
        />
      </Carousel>
    </div>
  );
};


export default ForTeamsTestimonials;
