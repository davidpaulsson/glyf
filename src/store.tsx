import React, { createContext, Dispatch, useReducer, useEffect } from 'react';

export enum routes {
  NEWS,
  SETTINGS,
}

export enum actions {
  NAVIGATE,
  SET_OPEN_LINKS_IN_NEW_TAB,
  SET_IS_DARK_MODE,
  SET_SYSTEM_DARK_MODE,
  SET_LOADING_SOURCES,
  SET_SOURCES,
  SET_SOURCE,
}

export interface IItem {
  title: string;
  description: string;
  preamble: string;
  published?: string;
  sortDate: string;
  url: string;
  github?: boolean;
  language?: string;
  author?: string;
  stars?: number;
  image?: string;
}

export interface ISource {
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
    useSystemPreferenceDarkMode: boolean;
    selectedSources: string[];
  };
  sources: {
    sources: ISource[];
    updatedAt: string | null;
    loading: boolean;
  };
}

interface IContext {
  dispatch: Dispatch<any>;
  state: IState;
}

const initialState = JSON.parse(
  localStorage.getItem('GlyfStore') as string
) || {
  navigation: {
    currentRoute: routes.NEWS,
  },
  settings: {
    openLinksInNewTab: false,
    isDarkMode: false,
    useSystemPreferenceDarkMode: true,
    selectedSources: [],
  },
  sources: {
    sources: [],
    updatedAt: null,
    loading: false,
  },
};

const store = createContext<IContext>({
  dispatch: () => {},
  state: initialState,
});

const { Provider } = store;

const take = (arr: ISource[], qty = 1) => [...arr].splice(0, qty);

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
              useSystemPreferenceDarkMode: false,
            },
          };
        case actions.SET_SYSTEM_DARK_MODE:
          return {
            ...state,
            settings: {
              ...state.settings,
              useSystemPreferenceDarkMode: action.payload,
            },
          };
        case actions.SET_LOADING_SOURCES:
          return {
            ...state,
            sources: {
              ...state.sources,
              loading: true,
            },
          };
        case actions.SET_SOURCES:
          return {
            ...state,
            sources: {
              ...action.payload,
              loading: false,
            },
            settings: {
              ...state.settings,
              selectedSources:
                state.settings.selectedSources.length > 0
                  ? state.settings.selectedSources
                  : take(action.payload.sources, 6).map(
                      (source: { domain: string }) => source.domain
                    ),
            },
          };
        case actions.SET_SOURCE:
          return {
            ...state,
            settings: {
              ...state.settings,
              selectedSources: state.settings.selectedSources.map(
                (source, index) =>
                  index === action.payload.index
                    ? action.payload.source
                    : source
              ),
            },
          };
        default:
          return state;
      }
    },
    initialState
  );

  useEffect(() => {
    localStorage.setItem('GlyfStore', JSON.stringify(state));
  }, [state]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
