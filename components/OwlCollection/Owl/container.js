import React from 'react';
import { connect } from 'react-redux';

import { closeOwl } from '../../../state/features/owlCollection/actions';
import OwlComponent from './component';

class Owl extends React.Component {
  handleCloseOwl = () => {
    this.props.closeOwl();
  }

  render() {
    return (
      <OwlComponent
        {...this.props}
        handleCloseOwl={this.handleCloseOwl}
      />
    );
  }
}

// TODO: connect reselect
const mapStateToProps = state =>
  state.owlCollection.all.find(owl => owl.title === state.owlCollection.openedOwl);

const mapDispatchToProps = {
  closeOwl,
};

export default connect(mapStateToProps, mapDispatchToProps)(Owl);
