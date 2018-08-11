import React from 'react';
import { connect } from 'react-redux';

import OwlListComponent from './component';

class OwlList extends React.Component {
  render() {
    return (
      <OwlListComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  owls: state.owlCollection.all,
});

export default connect(mapStateToProps)(OwlList);
