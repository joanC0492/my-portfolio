import { UIState } from "./UIContext";

type typeUIReducer =
  | "UI - Open Sidebar"
  | "UI - Close Sidebar"
  | "UI - Open Modal"
  | "UI - Close Modal"
  | "UI - Change Carrousel";

interface IAction {
  type: typeUIReducer;
  payload?: boolean | number;
}

export const UIReducer: React.Reducer<UIState, IAction> = (state, action) => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return { ...state, sideMenuOpen: true };
    case "UI - Close Sidebar":
      return { ...state, sideMenuOpen: false };
    case "UI - Open Modal":
      return { ...state, modalCarrouselOpen: true };
    case "UI - Close Modal":
      return { ...state, modalCarrouselOpen: false };
    case "UI - Change Carrousel":
      return { ...state, projectIndexActive: action.payload as number };
    default:
      return state;
  }
};
