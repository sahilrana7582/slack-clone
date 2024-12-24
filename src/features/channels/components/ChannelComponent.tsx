import { Button } from '@/components/ui/button';
import { Hash, LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons/lib';
import { string } from 'zod';

interface SidebarItemProps {
  isChannel: boolean;
  label: string;
  id: string;
}

const ChannelComponent = ({ isChannel, label, id }: SidebarItemProps) => {
  return (
    <Button
      variant="transparent"
      className="p-6 flex items-center justify-start"
    >
      {isChannel && <Hash className="min-w-4 min-h-4 text-white text-2xl" />}
      <p className="leading-7 ">{label}</p>
    </Button>
  );
};

export default ChannelComponent;
