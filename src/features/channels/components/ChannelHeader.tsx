import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Doc } from '../../../../convex/_generated/dataModel';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronDown, Hash, Trash } from 'lucide-react';

interface ChannelHeaderProp {
  channel: Doc<'channels'>;
}
const ChannelHeader = ({ channel }: ChannelHeaderProp) => {
  return (
    <div className="h-[50px] border-b flex items-center hover:bg-accent/90 transition">
      <Dialog>
        <DialogTrigger>
          <Button variant="transparent" className="text-black">
            <Hash className="min-w-5 min-h-5" />
            {channel.name}
            <ChevronDown />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>#{channel.name}</DialogTitle>
            <Separator />
            <DialogDescription>
              Make changes to your channel here.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <div className="border rounded-md p-6 hover:bg-accent transition flex items-center justify-between cursor-pointer">
              <p className="font-semibold text-xl">#{channel.name}</p>
              <span className="text-blue-600 hover:underline cursor-pointer">
                Edit
              </span>
            </div>
            <Button
              variant="transparent"
              className="text-rose-600 p-8 border hover:bg-accent/90"
            >
              <Trash className="w-6 h-6 text-rose-600" />
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChannelHeader;
