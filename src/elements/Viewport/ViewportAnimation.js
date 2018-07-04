import React, { PureComponent } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import ViewportAction from './ViewportAction';


class ViewportAnimation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  setVisible = () => this.setState({ visible: true })

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <ViewportAction threshold={ 0 } onChange={ this.setVisible }>
        <CSSTransition
          timeout={ 2000 }
          in={ visible }
          classNames="fade-up-in"
        >
          { children }
        </CSSTransition>
      </ViewportAction>
    );
  }
}


export default ViewportAnimation;
