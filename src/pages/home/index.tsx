import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'antd'

export default (props:any) => {
  const [a, setA] = useState<string>('首页')
  const location = useLocation()

  useEffect(() => {
    console.log(props, location, 'index页面调用111111')
  }, [])
  console.log('index页面调用1111')
  return (
    <>
      <div>{a}</div>
      <Button type="primary">按钮</Button>
    </>
  )
}
