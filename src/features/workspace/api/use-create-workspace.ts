import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Id } from '../../../../convex/_generated/dataModel';
import { useState } from 'react';

type RequestType = { name: string };
type ResponseType = Id<'workspaces'> | null;

export const useCreateWorkSpace = () => {
  const [data, useData] = useState<ResponseType>(null);
  const createWorkSpace = useMutation(api.workspace.create);
  return { createWorkSpace };
};
