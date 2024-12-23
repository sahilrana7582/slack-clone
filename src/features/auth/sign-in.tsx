import { Button } from '@/components/ui/button';
import { SignInFlow } from './types';
import { z } from 'zod';

interface SigninProp {
  setState: (data: SignInFlow) => void;
}
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password should be atleast 8 Character'),
});
const Signin = ({ setState }: SigninProp) => {
  return (
    <div className="text-red-600">
      Sign-In
      <Button onClick={() => setState('signup')}>Click me</Button>
    </div>
  );
};

export default Signin;
