import React from 'react';
import { connect } from 'react-redux';

import OwlCollectionComponent from './component';

class OwlCollection extends React.Component {
  render() {
    return (
      <OwlCollectionComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  openedOwl: state.owlCollection.openedOwl,
});

export default connect(mapStateToProps)(OwlCollection);
