import { ToolTip } from '@/components/provider/ToolRipProvider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ListFilter, SquarePen } from 'lucide-react';

interface WorkSpaceIdProp {
  name: string;
  role: string | undefined;
}
const WorkSpaceHeader = ({ name, role }: WorkSpaceIdProp) => {
  const isAdmin = role === 'admin';
  return (
    <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="transparent"
            className="font-semibold text-lg w-auto p-1.5 overflow-hidden focus-visible:ring-0 focus-visible:ring-offset-0"
            size="sm"
          >
            <span className="truncate">{name}</span>
            <ChevronDown className="size-4 ml-1 shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[260px] ml-[5.0rem]">
          <DropdownMenuItem className="group">
            <div className="size-9 relative overflow-hidden bg-[#616061] rounded-sm text-white font-semibold text-xl rounded-mb flex items-center justify-center mr-2">
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">{name}</p>
              <p className="text-xs text-muted-foreground">Active workspace</p>
            </div>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2">
                Invite people to <span className="font-bold">{name}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2">
                Preferences
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <ToolTip label="Filter conversations" side="top">
          <Button variant="transparent" size="iconSm">
            <ListFilter className="size-4" />
          </Button>
        </ToolTip>
        <ToolTip label="New message" side="top">
          <Button variant="transparent" size="iconSm">
            <SquarePen className="size-4" />
          </Button>
        </ToolTip>
      </div>
    </div>
  );
};

export default WorkSpaceHeader;

// 481349