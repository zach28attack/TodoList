import {createContext, useState, useEffect} from "react";
import Cookies from "js-cookie";

export const LoginContext = createContext();

export function LoginContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get("token")) {
      setLoggedIn(true);
    }
  }, []);

  return <LoginContext.Provider value={{loggedIn, setLoggedIn}}>{props.children}</LoginContext.Provider>;
}
