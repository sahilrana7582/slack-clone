import { Button } from '@/components/ui/button';
import { SignInFlow } from './types';

interface SigninProp {
  setState: (data: SignInFlow) => void;
}

const SignUP = ({ setState }: SigninProp) => {
  return (
    <div className="text-red-600">
      Sign-Up
      <Button onClick={() => setState('signin')}>Click me</Button>
    </div>
  );
};

export default SignUP;
