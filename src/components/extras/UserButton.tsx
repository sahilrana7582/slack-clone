import { useCurrentUser } from '@/features/auth/use-get-user';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { LogOut, Mail, User } from 'lucide-react';
import { useAuthActions } from '@convex-dev/auth/react';

const UserButton = () => {
  const { data, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();

  const userName = data?.name?.charAt(0).toLocaleUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-zinc-100 rounded-md">
        <Avatar className="focus-visible:ring-0 focus-visible:ring-offset-0">
          <AvatarImage src={data?.image} />
          <AvatarFallback>{userName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User />
          {data?.name}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail />
          {data?.email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={signOut}>
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
