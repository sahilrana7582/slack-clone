import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export const useGetAllWorkspaces = () => {
  const data = useQuery(api.workspace.get);
  const isLoading = data === undefined;

  return { data, isLoading };
};
