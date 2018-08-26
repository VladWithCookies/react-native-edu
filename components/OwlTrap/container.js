import React from 'react';
import { connect } from 'react-redux';

import { setTrap, selectBaid } from '../../state/features/owlTrap/actions';
import OwlTrapComponent from './component';

class OwlTrap extends React.Component {
  handleSelectBaid = (baid) => () => {
    this.props.selectBaid(baid);
  }

  render() {
    return (
      <OwlTrapComponent
        {...this.props}
        handleSelectBaid={this.handleSelectBaid}
      />
    );
  }
}

const mapStateToProps = state => ({
  isMouseSelected: state.owlTrap.selectedBaid === 'mouse',
  isCaterpillarSelected: state.owlTrap.selectedBaid === 'caterpillar',
  isMeatSelected: state.owlTrap.selectedBaid === 'meat',
});

const mapDispatchToProps = {
  setTrap,
  selectBaid,
};

export default connect(mapStateToProps, mapDispatchToProps)(OwlTrap);
