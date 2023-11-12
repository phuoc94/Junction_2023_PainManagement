import React, { createContext, useEffect, useState } from 'react';
import AppLoader from '../components/AppLoader';
import { GlobalContextStates } from '../@types/global';

// initial state
const initialState: GlobalContextStates = {
  user: null,
  logout: () => {},
};

export const GlobalContext = createContext(initialState);

function GlobalContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('tokenId')) {
      fetchCurrentUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCurrentUser = async () => {
    try {
      // TODO:: in prod, we may need to get user from the server
      // const response = await axios.get("/user/get/current", {
      //   headers: {
      //     authorization: "Bearer " + localStorage.getItem("token"),
      //   },
      // });
      const localUser = localStorage.getItem('user');
      if (localUser) {
        setUser(JSON.parse(localUser));
      }
      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem('tokenId');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (loading) return <AppLoader />;

  return (
    <GlobalContext.Provider value={{ user, logout }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
