import { createContext, useReducer } from 'react';
import { data } from './data';
import { reducer } from './reducer';
import { State, Action } from './reducer';

export const CatalogContext = createContext({} as All);

type Props = {
  children: React.ReactNode
}

interface All {
  catalogState: State;
  catalogDispatch: React.Dispatch<Action>;
}

export const CatalogProvider = ({ children }: Props) => {
  const [catalogState, catalogDispatch] = useReducer(reducer, data);

  return (
    <CatalogContext.Provider value={{ catalogState, catalogDispatch }}>
      {children}
    </CatalogContext.Provider>
  )
}
