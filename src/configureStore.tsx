import { combineReducers, createStore } from 'redux';
import { SettingsState, Source, SourcesState, Status } from './types';

const defaultSourcesState: SourcesState = {
  status: Status.LOADING,
  sources: [],
};

const sources = (
  state = defaultSourcesState,
  action: { type: string; status: Status; sources: Source[] }
) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'ADD_SOURCES':
      return {
        ...state,
        status: Status.IDLE,
        sources: [
          ...action.sources,
          { title: 'foo', items: [{ title: '', preamble: '', url: '' }] },
          { title: 'bar', items: [{ title: '', preamble: '', url: '' }] },
          { title: 'qwe', items: [{ title: '', preamble: '', url: '' }] },
          { title: 'tyu', items: [{ title: '', preamble: '', url: '' }] },
          { title: 'ghj', items: [{ title: '', preamble: '', url: '' }] },
        ],
      };
    default:
      return state;
  }
};

const defaultSettingsState: SettingsState = {
  isDarkTheme: true,
};

const settings = (state = defaultSettingsState, action: { type: string }) => {
  switch (action.type) {
    case 'TOGGLE_DARK_THEME':
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ sources, settings });

const configureStore = () => {
  const store = createStore(rootReducer);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export default configureStore;
