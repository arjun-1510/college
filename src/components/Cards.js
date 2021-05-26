import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What's Your Passion</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.betterteam.com/images/process-executive-job-description-6010x4012-20201127_2020-11-27-150251.jpeg?crop=1:1,smart&width=1200&dpr=2'
              text='Updating vendor master, processing simple PO and NonPo invoices.'
              label='Process Executive'
              path='/services'
            />
            <CardItem
              src='https://static.tildacdn.com/tild3161-3666-4464-b866-323138313130/Posters-20.jpg'
              text='The benefit of using bussness process include improved customer satisfaction.'
              label='Busniess Processes'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.thebalancesmb.com/thmb/GfjucUYK-np7iO0prs8-RuZOgm0=/1885x1414/smart/filters:no_upscale()/GettyImages-629824198-5ae726a13de42300379a7f2e.jpg'
              text='sales and marketing are two business functions within an organization.they both impact lead generation and revenue.'
              label='Sale & Marketing'
              path='/services'
            />
            <CardItem
              src='https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/media/STEM_0.jpg'
              text='Engineering techonology is practical application of science and engineering to a wide range of real world problems.'
              label='Technology & Engineering'
              path='/products'
            />
            <CardItem
              src='https://www.booking-wp-plugin.com/wp-content/uploads/2019/09/Online-appointment-system-for-consulting-firm.jpg'
              text='The consulting industry consists of six main function areas such as Strategy Consulting and HR Consulting.'
              label='Consulting'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;