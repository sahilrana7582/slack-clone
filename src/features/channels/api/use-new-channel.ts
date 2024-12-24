import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

export const useNewChannel = () => {
  const onCreateNewChannel = useMutation(api.channel.createNewChannel);

  return { onCreateNewChannel };
};
