import React, { PureComponent } from 'react';

class ViewportAction extends PureComponent {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.recomputeState = this.recomputeState.bind(this);
    this.state = {
      fired: false
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.mounted = true;
    window.addEventListener('resize', this.recomputeState);
    window.addEventListener('scroll', this.recomputeState);
    setTimeout(this.recomputeState, 50);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    setTimeout(this.recomputeState, 50);
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('resize', this.recomputeState);
    window.removeEventListener('scroll', this.recomputeState);
  }


    isElementInViewport = (el) => {
        console.log(this.ref);
        console.log("\n\n\n\n\n\n\n\n\n\n\n");
        console.log(this);
    const rect = this.ref.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const { threshold } = this.props;

    return (
      rect.top >= 0 && rect.top <= windowHeight - threshold
    );
  }

  recomputeState() {
    if (this.mounted && !this.state.fired && this.isElementInViewport()) {
      this.setState({ fired: true}, this.props.onChange)
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default ViewportAction;
