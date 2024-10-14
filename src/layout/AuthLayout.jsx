// AuthLayout.jsx
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-wrapper">
       
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
