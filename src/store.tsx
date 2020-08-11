import React, { createContext, Dispatch, useReducer } from 'react';

export enum routes {
  NEWS,
  SETTINGS,
}

export enum actions {
  NAVIGATE,
  SET_OPEN_LINKS_IN_NEW_TAB,
  SET_IS_DARK_MODE,
  SET_SOURCES,
}

export interface IItem {
  title: string;
  description: string;
  preamble: string;
  published: string;
  sortDate: string;
  url: string;
}

interface ISource {
  domain: string;
  items: IItem[];
  title: string;
}

interface IState {
  navigation: {
    currentRoute: routes;
  };
  settings: {
    openLinksInNewTab: boolean;
    isDarkMode: boolean;
  };
  sources: {
    sources: ISource[];
    updatedAt: string | null;
  };
}

interface IContext {
  dispatch: Dispatch<any>;
  state: IState;
}

const initialState = {
  navigation: {
    currentRoute: routes.NEWS,
  },
  settings: {
    openLinksInNewTab: false,
    isDarkMode: false,
  },
  sources: {
    sources: [],
    updatedAt: null,
  },
};

const store = createContext<IContext>({
  dispatch: () => {},
  state: initialState,
});

const { Provider } = store;

const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: IState, action: { type: actions; payload: any }) => {
      switch (action.type) {
        case actions.NAVIGATE:
          return {
            ...state,
            navigation: {
              ...state.navigation,
              currentRoute: action.payload,
            },
          };
        case actions.SET_OPEN_LINKS_IN_NEW_TAB:
          return {
            ...state,
            settings: {
              ...state.settings,
              openLinksInNewTab: action.payload,
            },
          };
        case actions.SET_IS_DARK_MODE:
          return {
            ...state,
            settings: {
              ...state.settings,
              isDarkMode: action.payload,
            },
          };
        case actions.SET_SOURCES:
          return {
            ...state,
            sources: action.payload,
          };
        default:
          return state;
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
