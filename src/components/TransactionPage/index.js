import React, { useContext, useEffect } from 'react'
import TransactionHistory from './TransactionHistory'
import UserContext from '../../Contexts/UserContext';

const TransactionPage = () => {
  const {contextUserData} = useContext(UserContext);
  
  useEffect(()=>{
    console.log('user data in trannsactions page', contextUserData);
  },[contextUserData])

  return (
    <div>
      pay button, request button
      <TransactionHistory />
    </div>
  )
}

export default TransactionPage
