import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';


class ViewportAction extends PureComponent {
  constructor(props) {
    super(props);

    this.recomputeState = this.recomputeState.bind(this);

    this.state = {
      fired: false,
      mounted: false
    }
  }

  componentDidMount() {
    this.instance = findDOMNode(this);
    this.setState({ mounted: true });
    window.addEventListener('resize', this.recomputeState);
    window.addEventListener('scroll', this.recomputeState);
    setTimeout(this.recomputeState, 50);
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(this.recomputeState, 50);
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
    window.removeEventListener('resize', this.recomputeState);
    window.removeEventListener('scroll', this.recomputeState);
  }


  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const { threshold } = this.props;

    return (
      rect.top >= 0 && rect.top <= (windowHeight - threshold)
    );
  }

  recomputeState() {
    const { onChange } = this.props;
    const { fired } = this.state;

    if (this.mounted && !fired && this.isElementInViewport(this.instance)) {
      this.setState({ fired: true }, onChange)
    }
  }

  render() {
    const { children } = this.props;

    return React.Children.only(children);
  }
}

export default ViewportAction;
