import React, { PureComponent } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TrackVisibility from 'react-on-screen';

class ViewportAnimation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  setVisible = () => this.setState({ visible: true })

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <TrackVisibility once>

        <CSSTransition
          timeout={ 2000 }
          in={ visible }
          classNames="fade-up-in"
        >
          { children }
        </CSSTransition>

      </TrackVisibility>
    );
  }
}


export default ViewportAnimation;
