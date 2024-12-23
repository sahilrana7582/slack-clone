'use client';
import CreateWorkSpaceModal from '@/components/createWorkspace/CreateWorkSpaceModal';
import UserButton from '@/components/extras/UserButton';
import { useCurrentUser } from '@/features/auth/use-get-user';
import { ConvexQueryClient } from '@convex-dev/react-query';
import { ConvexReactClient } from 'convex/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home = () => {
  return (
    <div className="  w-fit flex items-center justify-center h-full">
      <div className="flex flex-col w-16 bg-[#5E2C5F]  items-center h-full gap-10">
        <CreateWorkSpaceModal />
        <UserButton />
      </div>
    </div>
  );
};

export default Home;
