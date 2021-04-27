import { createContext, ReactNode, useState } from "react";
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

import { getUser } from '../actions/userActions';

interface User {
  _id?: string,
  email?: string
  name?: string,
  bio?: string,
  image?: string,
  twitter?: string,
  instagram?: string
}

interface UserContextData {
  redefineUser: (newUser: User) => void;
  connectLoggedUser: () => void;
  user: User;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);
export function UserProvider({ children }: UserProviderProps) {

  function redefineUser(newUser: User) {
    setUser(newUser)
  }

  function connectLoggedUser() {
    const userId = Cookies.get('_user_id')
    if (userId) {

      // usar token no lugar do ID hash para aumentar segurança

      getUser(userId).then(response => {
        redefineUser(response)
      });

    }
  }

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{
      redefineUser,
      connectLoggedUser,
      user
    }}>
      { children}
    </UserContext.Provider>
  )
}