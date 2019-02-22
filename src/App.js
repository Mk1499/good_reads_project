import React, { Component } from 'react';
import './App.css';
import TabContent from './components/Tabs/TabContent';

class App extends Component {
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

export default App;