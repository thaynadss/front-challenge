import { createContext, useContext, useReducer } from 'react';
import { data } from './data';
import { reducer } from './reducer';
import { State, Action } from './reducer';
import { ChildrenComponent } from 'types/ChildrenComponent';

export const CatalogContext = createContext({} as contextType);

type contextType = {
  catalogState: State;
  catalogDispatch: React.Dispatch<Action>;
}

export const CatalogProvider = ({ children }: ChildrenComponent) => {
  const [catalogState, catalogDispatch] = useReducer(reducer, data);

  return (
    <CatalogContext.Provider value={{ catalogState, catalogDispatch }}>
      {children}
    </CatalogContext.Provider>
  )
};

export const useCatalogContext = () => {
  return useContext(CatalogContext);
}
