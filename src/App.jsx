// src/App.jsx
import React, { Suspense } from 'react';
import FundusDemo from './FundusDemo';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <div>
      <h1>Fundus Classification Demo</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <FundusDemo />
      </Suspense>
    </div>
  );
}

export default App;
