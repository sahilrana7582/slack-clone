import { Button } from '@/components/ui/button';
import useGetWorkSpaceId from '@/lib/useWorkSpaceId';
import { Hash, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import { string } from 'zod';

interface SidebarItemProps {
  isChannel: boolean;
  label: string;
  id: string;
}

const ChannelComponent = ({ isChannel, label, id }: SidebarItemProps) => {
  const workspaceId = useGetWorkSpaceId();
  return (
    <Link href={`/workspaces/${workspaceId}/channels/${id}`} className="w-full">
      <Button
        variant="transparent"
        className="p-6 flex items-center justify-start w-full"
      >
        {isChannel && <Hash className="min-w-4 min-h-4 text-white text-2xl" />}
        <p className="leading-7 ">{label}</p>
      </Button>
    </Link>
  );
};

export default ChannelComponent;
