import React, { useState, useEffect, createContext } from 'react';
import { getApi } from './services';
import GlobalStyles from './styles/global';
import LoadingPage from './components/LoadingPage';
import Routes from './routes';

const App = () => {

  const [authUser, setAuthUser] = useState({ authenticated: false });
  const [loading, setLoading] = useState(true);
  const [menuMobileActive, setMenuMobileActive] = useState(false);

  useEffect(() => {
    (async () => {
      if (!authUser.authenticated) {
        setLoading(true);
        const token = await sessionStorage.getItem('tokenAccess');
        const { success, user } = await getApi('/session', token);
        if (success) setAuthUser({ ...user, authenticated: true });
        setLoading(false);
      }
    })()
  }, [authUser])

  return (
    <AppContext.Provider value={{ authUser, setAuthUser, menuMobileActive, setMenuMobileActive }}>
      <GlobalStyles />
      {(loading) && <LoadingPage />}
      {(!loading) && <Routes authUser={authUser} />}
    </AppContext.Provider>
  )
}

export const AppContext = createContext()
export default App
