import React from 'react';
import OwlTrapComponent from './component';

class OwlTrap extends React.Component {
  render() {
    return (
      <OwlTrapComponent {...this.props} />
    );
  }
}

export default OwlTrap;
