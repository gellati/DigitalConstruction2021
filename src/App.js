import React from 'react';
import './style.css';
import Dashboard from './components/Dashboard';
import initialState from './data/constants';

export default function App() {
  return (
    <div>
      <Dashboard initialState={initialState} />
    </div>
  );
}
