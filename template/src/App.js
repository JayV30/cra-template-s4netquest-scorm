import React from 'react';
import ScormProvider from 'react-scorm-provider';

function App() {
  return (
    <ScormProvider version="1.2" debug={process.env.NODE_ENV !== 'production'}>
      <div className="App">
        <p>Hello World</p>
      </div>
    </ScormProvider>
  );
}

export default App;