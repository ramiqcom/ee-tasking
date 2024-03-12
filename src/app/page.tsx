'use client';

import { Suspense, useState } from 'react';
import Loading from './component/loading';
import Explore from './explore/page';
import { Context } from './global';
import LoginPage from './login/page';

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const dict = {
    isLogged,
    setIsLogged,
    showPanel,
    setShowPanel,
  };

  return (
    <Context.Provider value={dict}>
      <Suspense fallback={<Loading />}>{isLogged ? <Explore /> : <LoginPage />}</Suspense>
    </Context.Provider>
  );
}
