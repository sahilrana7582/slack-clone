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

const formSchema = z.object({
  name: z
    .string()
    .min(5, 'Workspace name should have 5 words atleast!')
    .max(20, 'Workspace name should be less than 20!'),
});

const CreateNewWorkspace = () => {
  const [open, setOpen] = useModal();

  const { createWorkSpace } = useCreateWorkSpace();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await createWorkSpace(data);
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
          <DialogTitle>Create New Workspace</DialogTitle>
          <DialogDescription>
            Keep updated with your personal, and co-operate life
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
                      placeholder="Enter WorkSpace Name i.e: 'Work', 'Office', & 'Home' "
                      {...field}
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Add Workspace
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewWorkspace;
