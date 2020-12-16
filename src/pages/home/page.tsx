import React, { useState } from 'react';

export default () => {
  const [a, setA] = useState<string>('页面1');
  return (
    <>
      <div>{a}</div>
    </>

  );
};
