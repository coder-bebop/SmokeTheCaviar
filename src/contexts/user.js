// Importing
import {useState, createContext} from 'react';

const userProps = {
  username: '',
  email: '',
  password: '',
  paymentMethods: [],
  savedItems: [],
  previousPurchases: [],
};

const UserContext = createContext(userProps);

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(userProps);

  const contextValue = {
    user: user,
    setUser: setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};
