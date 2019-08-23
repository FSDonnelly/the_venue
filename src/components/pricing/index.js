import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

export class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'General', 'V.I.P'],
    desc: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit ducimus hic ea tenetur, placeat laborum numquam sapiente earum maxime architecto ad doloremque. Enim aperiam repudiandae eum nesciunt quam quo.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit ducimus hic ea tenetur, placeat laborum numquam sapiente earum maxime architecto ad doloremque. Enim aperiam repudiandae eum nesciunt quam quo.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit ducimus hic ea tenetur, placeat laborum numquam sapiente earum maxime architecto ad doloremque. Enim aperiam repudiandae eum nesciunt quam quo.'
    ],
    linkTo: [
      'https://www.vividseats.com/concerts/chance-the-rapper-tickets/chance-the-rapper-pechanga-arena-9-18-3196027.html',
      'https://www.vividseats.com/concerts/chance-the-rapper-tickets/chance-the-rapper-pechanga-arena-9-18-3196027.html',
      'https://www.vividseats.com/concerts/chance-the-rapper-tickets/chance-the-rapper-pechanga-arena-9-18-3196027.html'
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className='pricing_description'>{this.state.desc[i]}</div>
            <MyButton
              text='Purchase Tickets'
              bck='#ffa800'
              color='#ffffff'
              link={this.state.linkTo[i]}
            />
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
