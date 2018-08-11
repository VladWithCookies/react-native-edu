import React from 'react';
import { connect } from 'react-redux';

import OwlComponent from './component';

class Owl extends React.Component {
  render() {
    return (
      <OwlComponent {...this.props} />
    );
  }
}

// TODO: connect reselect
const mapStateToProps = state =>
  state.owlCollection.all.find(owl => owl.name === state.owlCollection.openedOwl);

export default connect(mapStateToProps)(Owl);
