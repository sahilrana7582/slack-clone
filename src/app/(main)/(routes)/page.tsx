'use client';
import CreateWorkSpaceModal from '@/components/createWorkspace/CreateWorkSpaceModal';
import UserButton from '@/components/extras/UserButton';
import { useCurrentUser } from '@/features/auth/use-get-user';
import { ConvexQueryClient } from '@convex-dev/react-query';
import { ConvexReactClient } from 'convex/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Home = () => {
  return <div className="h-full">Home</div>;
};

export default Home;
