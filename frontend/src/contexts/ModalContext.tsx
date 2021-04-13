import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{
      isModalOpen,
      closeModal,
      openModal
    }}>
      { children}
    </ModalContext.Provider>
  )
}