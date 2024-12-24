'use client';
import { z } from 'zod';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import { useCreateWorkSpace } from '@/features/workspace/api/use-create-workspace';
import { toast } from 'sonner';
import { Id } from '../../../convex/_generated/dataModel';
import { convexQuery } from '@convex-dev/react-query';
import { useGetAllWorkspaces } from '@/features/workspace/api/use-get-all-workspaces';
import { ScrollArea } from '../ui/scroll-area';
import { Loader2, Plus } from 'lucide-react';
import { useModal } from '@/features/store/use-workspace-modal';
import { useRouter } from 'next/navigation';
import useGetWorkSpaceId from '@/lib/useWorkSpaceId';
import { useGetWorkSpaceInfo } from '@/features/workspace/api/use-get-info-by-id';

const CreateWorkSpaceModal = () => {
  const id = useGetWorkSpaceId();
  const { data: name, isLoading: nameLoad } = useGetWorkSpaceInfo({ id });
  const [open, setOpen] = useModal();
  const { data, isLoading } = useGetAllWorkspaces();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className="w-10 h-10 bg-zinc-400 text-lg font-semibold flex items-center justify-center rounded-md">
          {nameLoad ? (
            <Loader2 className="text-black w-6 h-6 animate-spin" />
          ) : (
            name && name.name.charAt(0).toUpperCase()
          )}
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        side="right"
        className="w-[300px] px-3 py-2 ml-4"
      >
        {data && data.length > 0 && (
          <>
            <DropdownMenuLabel>Active Workspaces</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        <ScrollArea className="h-[200px]">
          {data &&
            data.map((workspace) => (
              <DropdownMenuItem
                key={workspace._id}
                className="py-6 "
                onClick={() => router.push(`/workspaces/${workspace._id}`)}
              >
                <p className="text-clip font-semibold text-md ">
                  {workspace.name}
                </p>
              </DropdownMenuItem>
            ))}
        </ScrollArea>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-4" onClick={() => setOpen(true)}>
          <Plus className="text-xl min-w-6 min-h-6" />
          <p className="font-medium text-base">Create New Workspace</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreateWorkSpaceModal;
