// src/App.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';
import AppRoutes from './AppRoutes'; // Importer les routes

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); 
  }, []);

  // Vérifier si le chemin d'accès est celui des pages d'authentification
  const isAuthRoute = pathname === '/signin' || pathname === '/signup';

  return loading ? (
    <Loader />
  ) : isAuthRoute ? (
    <AppRoutes /> // Ne pas utiliser le layout par défaut pour les routes d'authentification
  ) : (
    <DefaultLayout>
      <AppRoutes /> {/* Utiliser le composant de routes */}
    </DefaultLayout>
  );
}

export default App;
