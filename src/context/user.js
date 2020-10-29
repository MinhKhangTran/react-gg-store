import React from "react";

export const UserContext = React.createContext();

function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(getUserFromLocalStorage());
  const [alert, setAlert] = React.useState(false);
  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };
  const showAlert = () => {
    setAlert(true);
  };

  return (
    <UserContext.Provider
      value={{ user, alert, userLogin, userLogout, setAlert }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return React.useContext(UserContext);
};
