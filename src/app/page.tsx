'use client';
import UserButton from '@/components/extras/UserButton';
import { useCurrentUser } from '@/features/auth/use-get-user';

const Home = () => {
  return (
    <div className="  w-fit flex items-center justify-center h-full">
      <div className="flex flex-col w-16 bg-[#5E2C5F]  items-center h-full">
        <UserButton />
      </div>
    </div>
  );
};

export default Home;
