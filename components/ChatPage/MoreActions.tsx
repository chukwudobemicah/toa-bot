import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Icon from "../icon-selector/icon-selector";
import { ReactNode } from "react";

type MoreActionsProps = {
  children: ReactNode;
};

const MoreActions = ({ children }: MoreActionsProps) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{children}</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="flex flex-col font-ibm-plex relative z-50 w-fit gap-4 bg-background">
            <DropdownMenu.Item className="cursor-pointer flex items-center font-ibm-plex  gap-4 hover:bg-text-secondary/50 pl-4 pr-8 py-2 transition-colors duration-300 ease-linear">
              <Icon iconType="reply" className="w-4 text-text-secondary" />
              <p className="font-ibm-plex">Reply</p>
            </DropdownMenu.Item>

            <DropdownMenu.Item className="cursor-pointer flex items-center gap-4 hover:bg-text-secondary/50 pl-4 pr-8 py-2 transition-colors duration-300 ease-linear">
              <Icon iconType="pin" className="w-4 text-text-secondary" />
              <p>Pin to Conversation</p>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-negative cursor-pointer flex items-center gap-4 hover:bg-text-secondary/50 pl-4 pr-8 py-2 transition-colors duration-300 ease-linear">
              <Icon iconType="bin" className="w-4" />
              <p>Delete Message</p>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default MoreActions;
