import React from 'react';

import Carousel from 'Elements/Carousel';
import QuoteCard from 'Components/QuoteCard';
import {
  container, content,
  title, offBlack
} from './styles.module.scss';


const ForTeamsTestimonials = props => {
  return (
    <div className={ container }>
      <div className={ content }>
        <Carousel>
          <QuoteCard
            title="Train staff on the latest IT"
            quote="We are using ITProTV to get our team trained up on the latest Microsoft Technologies. If you are a company who wants to train up your staff, ITProTV is the way to go by far."
            attribution="Kevin Gamin, VP of Service at One World Technology"
          />
          <QuoteCard
            title="Improved knowledge"
            quote="There is an excellent variety of courses available. Completion of coursework has improved knowledge and understanding of the tasks my staff perform each day, and I couldn’t be happier."
            attribution="Jim Ford, VP of Information Technology"
          />
          <QuoteCard
            title="Learn anywhere, anytime"
            quote="This is great for people to use at home or on the road. If you can’t afford to send someone to a Windows 2016 server class for a week, this is a very good test prep."
            attribution="Jim Barber, Manager of Information Systems"
          />
          <QuoteCard
            title="Great for any size team"
            quote="ITProTV is great for smaller teams looking for a cost-effective solution to help their team members skill-up and stay up-to-date…It’s equally good for larger teams who wish to have a readily available resource."
            attribution="John-David Sayle, IT System Administrator"
          />
          <QuoteCard
            title="Training that pays for itself"
            quote="My team is moving faster than ever before. If I tallied the consulting expense of the changes we have made on our own, ITProTV probably would have paid for itself in the first 30 days."
            attribution="Dana Morrison, IT Director"
          />
          <QuoteCard
            title="Level-up your staff"
            quote="ITProTV has given us the ability to level-up our technicians to a point where they can decide ‘this is important for me to learn."
            attribution="Dana Morrison, IT Director"
          />
        </Carousel>
      </div>
    </div>
  );
};


export default ForTeamsTestimonials;
