import React from 'react';
import { connect } from 'react-redux';

import { setActiveTab } from '../../state/features/footer/actions';
import AppFooterComponent from './component';

class AppFooter extends React.Component {
  render() {
    return <AppFooterComponent {...this.props} />
  }
}

const mapStateToProps = state => ({
  activeTab: state.footer.activeTab,
});

const mapDispatchToProps = {
  setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);
