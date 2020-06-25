import React from 'react';
import './App.css';
import Layout from './component/Layout/Layout';
import ListBuilder from './container/ListBuilder/ListBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <ListBuilder></ListBuilder>
      </Layout>
    </div>
  );
}

export default App;
