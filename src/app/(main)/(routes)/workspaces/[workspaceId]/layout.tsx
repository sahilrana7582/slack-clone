import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import WorkSpaceHeader from '@/features/workspace/components/WorkSpaceHeader';
import WorkspaceSidebar from './WorkspaceSidebar';

const WorkSpaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      autoSaveId="slack-clone-workspace-layout"
    >
      <ResizablePanel defaultSize={20} minSize={11} className="bg-[#5E2C5F]">
        <WorkspaceSidebar />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={80} minSize={20}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default WorkSpaceLayout;

// {showPanel && (
//   <>
//     <ResizableHandle withHandle />
//     <ResizablePanel minSize={20} defaultSize={29}>
//       {parentMessageId ? (
//         <Thread
//           messageId={parentMessageId as Id<'messages'>}
//           onClose={onClose}
//         />
//       ) : profileMemberId ? (
//         <Profile
//           memberId={profileMemberId as Id<'members'>}
//           onClose={onClose}
//         />
//       ) : (
//         <div className="flex h-full items-center justify-center">
//           <Loader className="size-5 animate-spin text-muted-foreground" />
//         </div>
//       )}
//     </ResizablePanel>
//   </>
// )}
