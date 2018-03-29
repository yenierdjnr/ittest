import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

import ViewportAction from './ViewportAction';

export default class ViewportAnimation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  setVisible = () => this.setState({ visible: true })

  render() {
    return (
      <ViewportAction threshold={0} onChange={this.setVisible}>
        <CSSTransition
          timeout={1000}
          in={this.state.visible}
          classNames="fade-up-in"
        >
          {this.props.children}
        </CSSTransition>
      </ViewportAction>
    );
  }
}
