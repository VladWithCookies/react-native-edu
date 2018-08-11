import React from 'react';
import { connect } from 'react-redux';

import { showOwl } from '../../../../state/features/owlCollection/actions';
import OwlItemComponent from './component';

class OwlItem extends React.Component {
  handleShowOwl = () => {
    this.props.showOwl(this.props.name);
  }

  render() {
    return (
      <OwlItemComponent
        {...this.props}
        handleShowOwl={this.handleShowOwl}
      />
    );
  }
}

const mapDispatchToProps = {
  showOwl,
};

export default connect(null, mapDispatchToProps)(OwlItem);
