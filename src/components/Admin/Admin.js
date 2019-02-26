import React, { Component } from 'react';
import TabContent from '../Tabs/TabContent';
import AppModals from '../Modals/AppModals';

class Admin extends Component {
  render() {

    return (
      <>
        <TabContent />
        <AppModals />
      </>
    );
  }
}

export default Admin;