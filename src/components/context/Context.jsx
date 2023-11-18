import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <AppContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useAppContext };
