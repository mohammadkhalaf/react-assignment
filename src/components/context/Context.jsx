import { createContext, useContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="dark">{children}</AppContext.Provider>;
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext };
