import * as React from 'react';

export function createContext<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error('useContext must be inside a Provider with a value');
    return c;
  };
  return [useContext, ctx.Provider] as const;
}
