import React, { createContext, Dispatch, useReducer } from 'react';

export enum routes {
  NEWS,
  SETTINGS,
}

export enum actions {
  NAVIGATE,
  SET_OPEN_LINKS_IN_NEW_TAB,
  SET_IS_DARK_MODE,
}

interface IState {
  navigation: {
    currentRoute: routes;
  };
  settings: {
    openLinksInNewTab: boolean;
    isDarkMode: boolean;
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
        default:
          return state;
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
