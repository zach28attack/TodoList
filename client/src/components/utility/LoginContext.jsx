import {createContext, useState, useEffect} from "react";
import Cookies from "js-cookie";

export const LoginContext = createContext();

export function LoginContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCollectionsEmpty, setIsCollectionsEmpty] = useState(true);

  useEffect(() => {
    if (Cookies.get("token")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn, isCollectionsEmpty, setIsCollectionsEmpty}}>
      {props.children}
    </LoginContext.Provider>
  );
}
