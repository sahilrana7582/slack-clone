import { toast } from 'sonner';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCreateWorkSpace } from '@/features/workspace/api/use-create-workspace';
import { z } from 'zod';
import { useModal } from '@/features/store/use-workspace-modal';
import { Id } from '../../../convex/_generated/dataModel';
import { useNewChannel } from '@/features/channels/api/use-new-channel';
import useGetWorkSpaceId from '@/lib/useWorkSpaceId';

const formSchema = z.object({
  name: z
    .string()
    .min(5, 'Workspace name should have 5 words atleast!')
    .max(20, 'Workspace name should be less than 20!'),
});

interface CreateNewChannelProp {
  open: boolean;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

const CreateNewChannelComp = ({ open, setOpen }: CreateNewChannelProp) => {
  const { onCreateNewChannel } = useNewChannel();
  const workSpaceId = useGetWorkSpaceId();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    onCreateNewChannel({ name: data.name, id: workSpaceId });
    toast.success('New Workspace Created');
    onCloseHandler();
  };

  const onCloseHandler = () => {
    setOpen((prev) => !prev);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={onCloseHandler}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Channel</DialogTitle>
          <DialogDescription>
            Make new channels for new work loads.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter Channels Name i.e: 'Home Group', 'Rents' "
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex justify-between ">
              <Button
                type="button"
                variant="destructive"
                onClick={() => form.reset()}
              >
                Reset
              </Button>{' '}
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewChannelComp;
