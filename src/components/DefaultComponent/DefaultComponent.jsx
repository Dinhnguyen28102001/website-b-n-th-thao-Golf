import React from 'react'
import HeaderComponent from '../HeaderCompoent/HeaderComponent'
import { useLocation } from 'react-router-dom'

const DefaultComponent = ({children}) => {
  const { state}  = useLocation()
  return (
    <div>
        {state ? <HeaderComponent isHiddenSearch={false} /> :  <HeaderComponent isHiddenSearch={true}/>}
        {children}
    </div>
  )
}

export default DefaultComponent