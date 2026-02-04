import React, { Children } from 'react'

const Container = ({className,children}) => {
  return (
  <div className={`max-w-containerM m-auto ${className}`}>{children}</div>
  )
}

export default Container