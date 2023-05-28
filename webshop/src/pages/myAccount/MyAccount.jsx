import MyAccountEdit from '../../components/myAccount/MyAccountEdit'
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