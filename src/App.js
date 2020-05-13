import React, { useState, useEffect, createContext, Fragment } from 'react';
import GlobalStyles from './styles/global';
import PublicRoutes from './routes/PublicRoutes';

const App = () => {

  const [authUser, setAuthUser] = useState({});

  return (
    <AppContext.Provider value={{ authUser }}>
      <GlobalStyles />
      <PublicRoutes />
    </AppContext.Provider>
  )
}

export const AppContext = createContext()
export default App
