import React, { PureComponent } from 'react';

import {
  active, button, carousel,
  control, dot, next, pagination, previous, wrapper
} from './styles.module.scss';

const DURATION_MS = 8000;
const TRANISITION_MS = 700;

export default class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shouldAnimate: true,
      page: 1,
      pages: this.props.children.length
    };
  }

  bindDOMRef = (ref) => this.instance = ref;

  onTouchStart = (event) => {
    const { touches } = event;
    this.startXPos = touches[0].pageX;
  }

  onTouchMove = (event) => {

    const { touches } = event;
    this.delta = touches[0].pageX - this.startXPos;

    if (Math.abs(this.delta) > 30 && this.isDragging) {
      event.preventDefault();

      if(!this.touchComplete) {
        this.touchComplete = true;
        clearInterval(this.timer);
        this.delta < 0 ? this.nextPage() : this.previousPage();
      }


    // Detect Intent
    } else if (Math.abs(this.delta) > 30 && !this.isDragging) {
      this.isDragging = true;
    }
  }

  onTouchEnd = () => {
    this.touchComplete = false;
    this.isDragging = false
  }

  stopAndNext = () => {
    this.stop();
    this.nextPage();
  }

  stopAndPrevious = () => {
    this.stop();
    this.previousPage();
  }

  nextPage = () => {
    this.setState(({ page, pages }) => ({
      shouldAnimate: true,
      page: page - 1 < pages ? page + 1 : 1
    }), this.checkAnimationState)
  }

  previousPage = () => {
    this.setState(({ page, pages }) => ({
      shouldAnimate: true,
      page: page - 1 >= 0 ? page - 1 : pages
    }), this.checkAnimationState)
  }

  // check if the first element has repeated and jump back to the start if so
  checkAnimationState(){
    if (this.state.page > this.state.pages) {
      setTimeout(() => {
        this.setState({
          shouldAnimate: false,
          page: 1
        })
      }, TRANISITION_MS)
    } else if (this.state.page <= 0) {
      setTimeout(() => {
        this.setState({
          shouldAnimate: false,
          page: this.state.pages
        })
      }, TRANISITION_MS)
    }
  }

  componentDidMount(){
    this.timer = setInterval(this.nextPage, DURATION_MS);
  }

  componentWillUnmount(){
    this.stop();
  }

  render() {
    const { children } = this.props;
    const { shouldAnimate, page, pages } = this.state;
    const lastChild = children[children.length - 1];
    const style = {
      transform: `translateX(${(page - 1) * -100}%)`,
      transition: !shouldAnimate ? 'none' : `transform ${TRANISITION_MS}ms ease-in-out`
    }
    return (
      <div
        className={ wrapper }
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        ref={this.bindDOMRef}
      >
        <div className={ carousel } style={ style }>
          {page === 0 && children.length > 1 &&
            React.cloneElement(children[children.length - 2], { style:{ position: 'absolute', transform: 'translateX(-200%)' } })
          }
          {React.cloneElement(lastChild, { style:{ position: 'absolute', transform: 'translateX(-100%)' } })}
          {children.map((child, index) =>
            React.cloneElement(child, { key: index })
          )}
          {page + 2 > pages && React.cloneElement(children[0])}
          {page + 3 > pages && React.cloneElement(children[1])}
        </div>
        <button
          className={ `${ control } ${ previous }` }
          onClick={this.stopAndPrevious}
        />
        <button
          className={ `${ control } ${ next }` }
          onClick={this.stopAndNext}
        />
        <div className= { pagination }>
          {children.map((child, index) =>
            <button
              key={index}
              className={ `${button} ${(page - 1) % pages == index ? active: ''}` }
                        onClick={ () => this.gotoPage(index + 1)}
            >
              <span className={ dot } />
            </button>
          )}
        </div>
      </div>
    );
  }
}
