export interface SourceItem {
  title: string;
  url: string;
  preamble: string;
  language?: string;
  stars?: number;
  author?: string;
}

export interface Source {
  title: string;
  domain: string;
  items: SourceItem[];
}

export interface SettingsState {
  isDarkTheme: boolean;
}

export interface SourcesState {
  status: string;
  sources: Source[];
}

export enum Status {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
}

export enum Action {
  SET_STATUS = 'SET_STATUS',
  ADD_SOURCES = 'ADD_SOURCES',
}

export enum CurrentPage {
  NEWS = 'NEWS',
  SETTINGS = 'SETTINGS',
}
