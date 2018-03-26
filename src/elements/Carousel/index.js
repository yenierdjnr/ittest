import React, { PureComponent } from 'react';

import Hx from 'Elements/Hx';
import QuoteCard from 'Components/QuoteCard';
import {
  carousel, lastChild
} from './styles.module.scss';

// TODO: make these into props with defaults
const DURATION_MS = 5000;
const TRANISITION_MS = 500;

export default class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      animating: true,
      page: 1,
      pages: this.props.children.length
    };
  }

  // check if the first element has repeated and jump back to the start if so
  checkAnimationState(){
    if(this.state.page > this.state.pages) {
      setTimeout(() => {
        this.setState({
          animating: false,
          page: 1
        })
      }, TRANISITION_MS)
    }
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState(({ page, pages }) => ({
        animating: true,
        page: (page - 1) < pages ? page + 1 : 2
      }), this.checkAnimationState)
    }, DURATION_MS);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    const { children } = this.props;
    const { animating, page, pages } = this.state;
    const lastChild = children[children.length - 1];
    const style = {
      transform: `translateX(-${(page - 1) * 100}%)`,
      transition: !animating ? 'none' : `transform ${TRANISITION_MS}ms ease-in-out`
    }
    return (
      <div className={ carousel } style={style}>
        {React.cloneElement(lastChild, { style:{ position: 'absolute', transform: 'translateX(-100%)' } })}
        {children.map((child, index) => (
          React.cloneElement(child, { key: index })
        ))}
        {(page + 2 > pages) && React.cloneElement(children[0])}
        {(page + 3 > pages) && React.cloneElement(children[1])}
      </div>
    );
  }
}
