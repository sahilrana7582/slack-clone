import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

interface GetChannelInfoBYId {
  channelId: Id<'channels'>;
}

const useGetChannelInfo = ({ channelId }: GetChannelInfoBYId) => {
  const channelinfo = useQuery(api.channel.getChannelInfoById, {
    id: channelId,
  });

  const channelInfoLoading = channelinfo === undefined;

  return { channelinfo, channelInfoLoading };
};

export default useGetChannelInfo;
