import React, { useEffect } from 'react';

function TestComponent() {
  useEffect(() => {
    console.log("Test useEffect");
  }, []);

  return <div>Test</div>;
}

export default TestComponent;
