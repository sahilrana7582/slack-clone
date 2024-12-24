'use client';
import CreateWorkSpaceModal from '@/components/createWorkspace/CreateWorkSpaceModal';
import UserButton from '@/components/extras/UserButton';

const Home = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex w-full">
      <div className="flex flex-col w-16 bg-[#481349]  items-center h-full gap-10 justify-between py-4">
        <CreateWorkSpaceModal />
        <UserButton />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Home;
