import CreateNewChannelComp from '@/components/modals/CreateNewChannel';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';

interface CreateChannelPro {
  children: React.ReactNode;
}

const CreateNewChannel = ({ children }: { children: React.ReactNode }) => {
  const [showChannel, setShowChannel] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <>
      <CreateNewChannelComp open={open} setOpen={setOpen} />
      <div
        className="flex items-center justify-between 
      hover:bg-accent/10 rounded-md "
      >
        <div className="flex items-center ">
          <Button
            size="iconSm"
            variant="transparent"
            onClick={() => setShowChannel((prev) => !prev)}
          >
            {showChannel ? <ChevronDown /> : <ChevronRight />}
          </Button>
          <Button variant="transparent">Channels</Button>
        </div>
        <Button
          size="iconSm"
          variant="transparent"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Plus />
        </Button>
      </div>
      {showChannel && children}
    </>
  );
};

export default CreateNewChannel;
