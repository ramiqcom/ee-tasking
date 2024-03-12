'use client';

import { useContext } from 'react';
import Header from '../component/header';
import MapCanvas from '../component/map';
import Panel from '../component/panel';
import { Context, GlobalContext } from '../global';

export default function Explore() {
  const { showPanel } = useContext(Context) as GlobalContext;

  return (
    <>
      <Header />
      <div className='flexible' style={{ height: '100%', width: '100%' }}>
        {showPanel ? <Panel /> : null}
        <MapCanvas />
      </div>
    </>
  );
}
