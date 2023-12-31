"use client";

import { Loader2, LogOutIcon, Settings } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarImage } from "./ui/avatar";

const UserAvatar = () => {
  const isLoading = false;

  async function logoutUser() {}

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="w-10 h-10 cursor-pointer">
            <AvatarImage src={"/no-photo.jpg"} />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={"/no-photo.jpg"} />
            </Avatar>
            <div className="">
              <h4 className="text-xs">Jephthah</h4>
              <h6 className="text-xs text-primary-foreground/50">
                donjeph@gmail.com
              </h6>
            </div>
          </div>
          <div
            className="flex items-center gap-8 px-6 py-2 mx-2 mt-6 rounded-sm cursor-pointer hover:bg-muted"
            onClick={() => {}}
          >
            <Settings className="w-4 h-4" />
            <h6 className="text-sm">Manage Account</h6>
          </div>
          <div
            className="flex items-center gap-8 px-6 py-2 mt-6 rounded-sm cursor-pointer hover:bg-muted"
            onClick={() => logoutUser()}
          >
            <LogOutIcon className="w-4 h-4" />
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <h6 className="text-sm">Log out</h6>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default UserAvatar;
