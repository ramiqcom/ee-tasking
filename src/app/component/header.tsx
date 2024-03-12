import { useContext } from 'react';
import { Context, GlobalContext } from '../global';

export default function Header() {
  const { setShowPanel, showPanel } = useContext(Context) as GlobalContext;

  return (
    <div className='flexible center1 frame'>
      <div style={{ paddingLeft: '1vh' }} className='flexible gap'>
        <div className='material-icons' onClick={() => setShowPanel(!showPanel)}>
          menu
        </div>
      </div>
    </div>
  );
}
