'use client';
import useGetChannelInfo from '@/features/channels/api/useGetChannelInfo';
import ChannelHeader from '@/features/channels/components/ChannelHeader';
import useChannelId from '@/lib/useChannelId';
import { Loader2 } from 'lucide-react';

const ChannelInfo = () => {
  const channelId = useChannelId();

  const { channelInfoLoading, channelinfo } = useGetChannelInfo({ channelId });

  console.log(channelinfo);

  if (!channelinfo) {
    return <Loader2 className="w-6 h-6 animate-spin" />;
  }

  return (
    <div>
      <ChannelHeader channel={channelinfo} />
    </div>
  );
};

export default ChannelInfo;
