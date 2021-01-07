import React from 'react'
import './style/App.css';
import Router from './components/Router'
import Layout from './components/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout />
      <Router />
    </div>
  );
}

export default App;
