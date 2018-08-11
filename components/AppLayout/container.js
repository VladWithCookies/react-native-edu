import React from 'react';
import { connect } from 'react-redux';
import AppLayoutComponent from './component';

class AppLayout extends React.Component {
  render() {
    return (
      <AppLayoutComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  activeTab: state.footer.activeTab,
});

export default connect(mapStateToProps)(AppLayout);
