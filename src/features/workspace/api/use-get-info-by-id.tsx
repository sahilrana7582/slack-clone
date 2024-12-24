import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';

interface GetWorkSpaceInfoProp {
  id: Id<'workspaces'>;
}

export const useGetWorkSpaceInfo = ({ id }: GetWorkSpaceInfoProp) => {
  const data = useQuery(api.workspace.getInfoById, { id });

  return data;
};
