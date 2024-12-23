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
import { Plus } from 'lucide-react';
import { useModal } from '@/features/store/use-workspace-modal';

const CreateWorkSpaceModal = () => {
  const { data, isLoading } = useGetAllWorkspaces();
  const [open, setOpen] = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className="w-10 h-10 bg-zinc-200 flex items-center justify-center rounded-md">
          {data && data.length > 0 && data[0].name.charAt(0).toUpperCase()}
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
              <DropdownMenuItem key={workspace._id} className="py-6 ">
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