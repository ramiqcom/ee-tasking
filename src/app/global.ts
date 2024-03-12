import { Dispatch, SetStateAction, createContext } from 'react';

export type Login = {
  email: string | undefined;
  password: string | undefined;
};

export type GlobalContext = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  showPanel: boolean;
  setShowPanel: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<GlobalContext | undefined>(undefined);
