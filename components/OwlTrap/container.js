import React from 'react';
import { connect } from 'react-redux';

import { AsyncStorage } from 'react-native';
import { setTrap } from '../../state/features/owlTrap/actions';
import OwlTrapComponent from './component';

class OwlTrap extends React.Component {
  handleSetTrap = () => {
    this.props.setTrap();
  };

  render() {
    return (
      <OwlTrapComponent
        {...this.props}
        handleSetTrap={this.handleSetTrap}
      />
    );
  }
}

const mapDispatchToProps = {
  setTrap,
};

export default connect(null, mapDispatchToProps)(OwlTrap);
