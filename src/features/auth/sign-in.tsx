import { Button } from '@/components/ui/button';
import { SignInFlow } from './types';
import { z } from 'zod';

import { useAuthActions } from '@convex-dev/auth/react';

import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { FormInput } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

interface SigninProp {
  setState: (data: SignInFlow) => void;
}
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password should be atleast 8 Character'),
});
const Signin = ({ setState }: SigninProp) => {
  const { signIn, signOut } = useAuthActions();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    signIn('password', { ...data, flow: 'signIn' });
  };

  const onAuth = (data: 'github' | 'google') => {
    signIn(data);
  };
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Stay updated on your cooperate world</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Your E-Mail"
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter Your Password"
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </Form>
        <div className="py-6">
          <Separator />
        </div>
        <div className="space-y-2">
          <Button
            onClick={() => void onAuth('google')}
            variant="outline"
            className="w-full relative"
            size="lg"
          >
            <FcGoogle className="absolute top-[0.9rem] left-4 size-5 font-semibold " />
            Continue With Google
          </Button>
          <Button
            onClick={() => void onAuth('github')}
            variant="outline"
            className="w-full relative"
            size="lg"
          >
            <FaGithub className="absolute top-[0.9rem] left-4 size-5 font-semibold " />
            Continue With GitHub
          </Button>
          <p className="text-md">
            Don&t have an account?{' '}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState('signUp')}
            >
              Sign-UP
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Signin;
