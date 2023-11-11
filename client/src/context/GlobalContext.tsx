import React, { createContext, useContext, useEffect, useState } from 'react'

import { GlobalContextStates } from '../@types/global'
import AppLoader from '../components/AppLoader'

// initial state
const initialState: GlobalContextStates = {
  user: null,
  logout: () => {},
}

const GlobalContext = createContext(initialState)

function GlobalContextProvider({ children }: React.PropsWithChildren) {
  const [user] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchCurrentUser()
    } else {
      setLoading(false)
    }
  }, [])

  const fetchCurrentUser = async () => {
    try {
      //   const response = await axios.get("/user/get/current", {
      //     headers: {
      //       authorization: "Bearer " + localStorage.getItem("token"),
      //     },
      //   });
      //   setUser(response.data);
      setLoading(false)
    } catch (error) {
      logout()
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  if (loading) return <AppLoader />
  return (
    <GlobalContext.Provider value={{ user, logout }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider
