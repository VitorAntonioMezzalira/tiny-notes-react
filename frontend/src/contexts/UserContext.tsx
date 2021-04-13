import { createContext, ReactNode, useState } from "react";
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

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{
      redefineUser,
      user
    }}>
      { children}
    </UserContext.Provider>
  )
}