'use client';
import { useGetWorkSpaceInfo } from '@/features/workspace/api/use-get-info-by-id';
import WorkSpaceHeader from '@/features/workspace/components/WorkSpaceHeader';
import useGetWorkSpaceId from '@/lib/useWorkSpaceId';
import { Loader2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const WorkspaceSidebar = () => {
  const workspaceId = useGetWorkSpaceId();
  const data = useGetWorkSpaceInfo({ id: workspaceId });

  return (
    <div className="flex flex-col h-full">
      {!data ? (
        <Loader2 className="w-4 h-4 my-auto mx-auto animate-spin text-white" />
      ) : (
        <WorkSpaceHeader name={data.name} role={data.role} />
      )}
    </div>
  );
};

export default WorkspaceSidebar;
