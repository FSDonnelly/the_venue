import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 25
  };

  porcentage = () => {
    const { discountStart, discountEnd } = this.state;
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 40);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.porcentage()}>
            <div className='discount_porcentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 5th SEPTEMBER</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                laboriosam iure corrupti modi officia rerum porro fuga possimus
                sapiente non deleniti quas. Consectetur illo ipsa optio ducimus
                iusto rerum sit.
              </p>
              <button>Button</button>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
