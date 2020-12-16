import React, { useState } from 'react';
import './app.css';
import { Button, Space } from 'antd';
// import imgURL from '../public/img/logo.png';

export default () => {
  const [aa, setAa] = useState<string>('aah');

  return (
    <>
      <Space>
        <div style={{ color: 'red' }}>Hello Word</div>
        <p>{aa}</p>
        <Button onClick={() => setAa('cocci')} type="primary">按钮</Button>
        {/* <img src={imgURL} alt="111" /> */}
      </Space>
    </>
  );
};
