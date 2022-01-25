export type State = {
  page: number;
  filter: string;
  search: string;
}

export type Action =
  | { type: 'CHANGE_PAGE', payload: number }
  | { type: 'FILTER_SELECTED', payload: string }
  | { type: 'SEARCHED_TEXT', payload: string };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return { ...state, page: action.payload };
    }
    case 'FILTER_SELECTED': {
      return { ...state, filter: action.payload };
    }
    case 'SEARCHED_TEXT': {
      return { ...state, search: action.payload, filter: '' };
    }
  }
}