'use client';

import { useContext, useState } from 'react';
import { Context, GlobalContext, Login } from '../global';

export default function LoginPage() {
  const { setIsLogged } = useContext(Context) as GlobalContext;

  const [message, setMessage] = useState('');
  const [email, setEmail] = useState<Login['email']>(undefined);
  const [password, setPassword] = useState<Login['password']>(undefined);
  const [loginDisabled, setLoginDisabled] = useState<boolean>(false);

  return (
    <div className='flexible vertical big-gap' id='login'>
      <div className='flexible vertical small-gap'>
        <div>
          Email
          <input
            type='email'
            disabled={loginDisabled}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          Password
          <input
            type='password'
            value={password}
            disabled={loginDisabled}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        id='login-button'
        disabled={!(email && password) || loginDisabled}
        onClick={async () => {
          try {
            setMessage('Logging in...');

            // Freeze the login button for a while
            setLoginDisabled(true);

            const body: Login = { email, password };
            const res = await fetch('/api/login', {
              body: JSON.stringify(body),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            const { message } = await res.json();

            if (res.ok) {
              setIsLogged(res.ok);
              setMessage('Succes');
            } else {
              throw new Error(message);
            }
          } catch (error) {
            const { message } = error as Error;
            setMessage(message);
          } finally {
            // Allow the login button again
            setLoginDisabled(false);
          }
        }}
      >
        Login
      </button>

      <div>{message}</div>
    </div>
  );
}
