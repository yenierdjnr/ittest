import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

class ViewportAction extends PureComponent {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.recomputeState = this.recomputeState.bind(this);
    this.state = {
      fired: false
    }
  }

  componentDidMount() {
    this.instance = findDOMNode(this);
    this.mounted = true;
    window.addEventListener('resize', this.recomputeState);
    window.addEventListener('scroll', this.recomputeState);
    setTimeout(this.recomputeState, 50);
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(this.recomputeState, 50);
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('resize', this.recomputeState);
    window.removeEventListener('scroll', this.recomputeState);
  }


  isElementInViewport(el) {
    console.log('el');
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const { threshold } = this.props;

    return (
      rect.top >= 0 && rect.top <= (windowHeight - threshold)
    );
  }

  recomputeState() {
    if (this.mounted && !this.state.fired && this.isElementInViewport(this.instance)) {
      this.setState({ fired: true}, this.props.onChange)
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default ViewportAction;
