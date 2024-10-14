// src/AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageTitle from './components/PageTitle';
import ECommerce from './pages/Dashboard/ECommerce';
import AddEmploye from './pages/Employes/AddEmploye';
import ListeEmployes from './pages/Employes/listeEmployes';
import Profile from './pages/Profile';

import SignIn from './pages/Authentication/SignIn'; 
import SignUp from './pages/Authentication/SignUp'; 

const AppRoutes = () => (
  <Routes>
    {/* Routes de connexion */}
    <Route path="/signin" element={<SignIn />} />
    <Route
      path="/signup"
      element={
        <>
          <PageTitle title="Sign Up | TailAdmin - Tailwind CSS Admin Dashboard Template" />
          <SignUp />
        </>
      }
    />

    {/* Routes du dashboard */}
    <Route
      index
      element={
        <>
          <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
          <ECommerce />
        </>
      }
    />
   
    <Route path="/addEmploye" element={<AddEmploye />} />
    <Route path="/listeEmployes" element={<ListeEmployes />} />
    <Route path="/profile" element={<Profile />} />
    
    
  </Routes>
);

export default AppRoutes;
