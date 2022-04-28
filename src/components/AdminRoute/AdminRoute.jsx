import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import {useSelector} from 'react-redux';

function AdminRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  const ProtectedComponent = component || (() => children);

  return (
    <Route

      {...props}
    >
      {(user.id && user.access_level == 3) ?
        // If the user is logged in, show the protected component
        <ProtectedComponent />
        :
        // Otherwise, redirect to the Loginpage
        <LoginPage />
      }
    </Route>

  );
}

export default AdminRoute;
