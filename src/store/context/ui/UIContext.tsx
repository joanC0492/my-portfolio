"use client";
import { createContext, useContext, useReducer } from "react";
import { UIReducer } from "./UIReducer";

interface UIProviderProps {
  children: React.ReactNode;
}
interface ContextProps {
  sideMenuOpen: boolean;
  modalCarrouselOpen: boolean;
  projectIndexActive: number;
  // methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
  openModalCarrousel: () => void;
  closeModalCarrousel: () => void;
  changeProjectIndexActive: (index: number) => void;
}
export interface UIState {
  sideMenuOpen: boolean;
  modalCarrouselOpen: boolean;
  projectIndexActive: number;
}
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  modalCarrouselOpen: false,
  projectIndexActive: 0,
};

const UIContext = createContext({} as ContextProps);

const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    document.body.classList.add("overflow-hidden");
    dispatch({
      type: "UI - Open Sidebar",
    });
  };

  const closeSideMenu = () => {
    document.body.classList.remove("overflow-hidden");
    dispatch({
      type: "UI - Close Sidebar",
    });
  };

  const openModalCarrousel = () => {
    document.body.classList.add("overflow-hidden");
    dispatch({
      type: "UI - Open Modal",
    });
  };

  const closeModalCarrousel = () => {
    document.body.classList.remove("overflow-hidden");
    dispatch({
      type: "UI - Close Modal",
    });
  };

  const changeProjectIndexActive = (index: number) => {
    dispatch({
      type: "UI - Change Carrousel",
      payload: index,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        openModalCarrousel,
        closeModalCarrousel,
        changeProjectIndexActive,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export { UIProvider, useUIContext };
