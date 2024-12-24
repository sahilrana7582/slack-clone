import { Button } from '@/components/ui/button';
import useGetWorkSpaceId from '@/lib/useWorkSpaceId';
import { cn } from '@/lib/utils';
import { Hash, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import { string } from 'zod';
import clsx from 'clsx';

interface SidebarItemProps {
  isChannel: boolean;
  label: string;
  id: string;
  isActive: boolean;
}

const ChannelComponent = ({
  isChannel,
  label,
  id,
  isActive,
}: SidebarItemProps) => {
  const workspaceId = useGetWorkSpaceId();
  return (
    <Link href={`/workspaces/${workspaceId}/channels/${id}`} className="w-full">
      <Button
        variant="transparent"
        className={`p-6 flex items-center justify-start  w-full ${isActive ? 'bg-white text-[#481349] hover:bg-zinc-300' : ''}`}
      >
        {isChannel && (
          <Hash
            className={
              (cn('min-w-4 min-h-4 text-white text-2xl'),
              isActive === true ? 'text-[#481349]' : '')
            }
          />
        )}
        <p className="leading-7 ">{label}</p>
      </Button>
    </Link>
  );
};

export default ChannelComponent;
