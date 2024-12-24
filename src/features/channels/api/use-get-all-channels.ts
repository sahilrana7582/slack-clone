import { useQuery } from 'convex/react';
import { Id } from '../../../../convex/_generated/dataModel';
import { api } from '../../../../convex/_generated/api';

interface GetAllChannelProp {
  id: Id<'workspaces'>;
}

export const useAllChannels = ({ id }: GetAllChannelProp) => {
  const channels = useQuery(api.channel.getAllChannels, { id });
  const channelLoading = channels == undefined;

  return { channels, channelLoading };
};
