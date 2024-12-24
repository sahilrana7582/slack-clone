import { useParams } from 'next/navigation';
import { Id } from '../../convex/_generated/dataModel';

const useGetWorkSpaceId = () => {
  const param = useParams();
  return param.workspaceId as Id<'workspaces'>;
};

export default useGetWorkSpaceId;
