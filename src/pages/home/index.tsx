import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default (props:any) => {
  const [a, setA] = useState<string>('首页');
  const location = useLocation();

  useEffect(() => {
    console.log(props, location, 'this.props');
  }, []);
  return (
    <>
      <div>{a}</div>
    </>
  );
};
