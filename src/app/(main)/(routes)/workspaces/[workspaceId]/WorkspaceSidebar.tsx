'use client';
import { useAllChannels } from '@/features/channels/api/use-get-all-channels';
import ChannelComponent from '@/features/channels/components/ChannelComponent';
import CreateNewChannel from '@/features/channels/components/CreateNewChannel';
import { useGetWorkSpaceInfo } from '@/features/workspace/api/use-get-info-by-id';
import { useWorkspace } from '@/features/workspace/api/use-workspace';
import WorkSpaceHeader from '@/features/workspace/components/WorkSpaceHeader';
import useChannelId from '@/lib/useChannelId';
import useGetWorkSpaceId from '@/lib/useWorkSpaceId';
import { Hash, Loader2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const WorkspaceSidebar = () => {
  const workspaceId = useGetWorkSpaceId();
  const channelId = useChannelId();
  console.log(workspaceId, '<<<<<<<<<');
  const { data } = useGetWorkSpaceInfo({ id: workspaceId });
  const { data: workspace } = useWorkspace({ id: workspaceId });
  const { channels, channelLoading } = useAllChannels({ id: workspaceId });

  if (!data || !workspace) {
    return (
      <Loader2 className="w-4 h-4 my-auto mx-auto animate-spin text-white" />
    );
  }

  return (
    <div className="flex flex-col h-full px-2">
      <WorkSpaceHeader
        name={data.name}
        role={data.role}
        workspace={workspace}
      />

      <CreateNewChannel>
        {channels?.map((channel) => (
          <ChannelComponent
            key={channel._id}
            isChannel={true}
            id={channel._id}
            label={channel.name}
            isActive={channelId === channel._id}
          />
        ))}
      </CreateNewChannel>
    </div>
  );
};

export default WorkspaceSidebar;
