import { CopyIcon, RefreshCcw } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface InviteModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  joinCode: string;
}

const InviteModal = ({ open, setOpen, name, joinCode }: InviteModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite People to {name}</DialogTitle>
          <DialogDescription>
            Use this code below to invite people to {name}
          </DialogDescription>
        </DialogHeader>
        {/* all of my codes will be in lowercase even when user enters it wont be case sensitive every directly to lowercase */}
        <div className="flex flex-col gap-y-4 items-center justify-center py-10">
          <p className="text-4xl font-bold tracking-widest lowercase">
            {joinCode}
          </p>
          <Button
            variant="ghost"
            size="sm"

            //   onClick={handleCopy}
          >
            Copy Link
            <CopyIcon className="size-4 ml-2" />
          </Button>
        </div>
        <div className="flex items-center justify-between w-full">
          <Button
            // onClick={handleNewCode}
            // disabled={isPending}
            variant="outline"
          >
            New code
            <RefreshCcw className="size-4 ml-2" />
          </Button>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
