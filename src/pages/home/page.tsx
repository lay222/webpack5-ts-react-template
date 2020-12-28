import React, { useState } from 'react'

export default () => {
  const [a, setA] = useState<string>('页面1')
  console.log('page页面调用1111')
  return (
    <>
      <div>{a}</div>
    </>

  )
}
