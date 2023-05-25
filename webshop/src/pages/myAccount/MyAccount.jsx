import React from 'react'
import MyAccountEdit from '../../components/myAccount/myAccountEdit'
import MyAccountOrders from '../../components/myAccount/MyAccountOrders'

const MyAccount = () => {
  return (
    <div className="main_container">
      <MyAccountEdit />
      <MyAccountOrders />
    </div>
  )
}

export default MyAccount