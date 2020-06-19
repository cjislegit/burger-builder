import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Checks to see if the new show prop match the old prop, if not then the compoenent rerenders
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show
              ? 'translateY(0)'
              : 'translateY(-1000vh)',
            opactiy: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
