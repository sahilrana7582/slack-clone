'use client';
import { useState } from 'react';
import Signin from './sign-in';
import SignUP from './sign-up';
import { SignInFlow } from './types';

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>('signIn');
  return (
    <div className="h-full flex justify-center items-center bg-[#5c3b58]">
      {state === 'signIn' ? (
        <Signin setState={setState} />
      ) : (
        <SignUP setState={setState} />
      )}
    </div>
  );
};

export default AuthScreen;
