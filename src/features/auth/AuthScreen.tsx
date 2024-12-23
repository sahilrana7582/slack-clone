'use client';
import { useState } from 'react';
import Signin from './sign-in';
import SignUP from './sign-up';
import { SignInFlow } from './types';

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>('signin');
  return (
    <div className="h-full flex justify-center items-center bg-[#5c3b58]">
      {state === 'signin' ? (
        <Signin setState={setState} />
      ) : (
        <SignUP setState={setState} />
      )}
    </div>
  );
};

export default AuthScreen;
