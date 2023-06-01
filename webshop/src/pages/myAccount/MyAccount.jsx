import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import MyAccountEdit from '../../components/myAccount/myAccountEdit';
import MyAccountOrders from '../../components/myAccount/MyAccountOrders';

const MyAccount = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user || !user.uid) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      {user && user.uid && (
        <div className="main_container">
          <MyAccountEdit />
          <MyAccountOrders />
        </div>
      )}
    </>
  );
};

export default MyAccount;
