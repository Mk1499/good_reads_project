import React, { Component } from 'react';
import TabContent from '../Tabs/TabContent';

class Admin extends Component {
  render() {

    const options = [

      { label: 'Hesham', value: 'hesham' },
      { label: 'Khaled', value: 'khaled' },
      { label: 'Gomaa', value: 'gomaa' },
      { label: 'Mostafa', value: 'mostafa' },
      { label: 'Helmy', value: 'helmy' },

    ];

    return (
      <>
        <TabContent />
      </>
    );
  }
}

export default Admin;