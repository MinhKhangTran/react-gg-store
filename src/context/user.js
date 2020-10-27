import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export const useGlobalContext = () => {
  return React.useContext(UserContext);
};
