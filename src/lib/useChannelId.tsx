import { useParams } from 'next/navigation';
import { Id } from '../../convex/_generated/dataModel';

const useChannelId = () => {
  const param = useParams();
  return param.channelId as Id<'channels'>;
};

export default useChannelId;
