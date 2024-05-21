import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/AuthContext";
import ProfileImage from "@/assets/profile-img.png";

export function ProfileDropdown() {
  const { logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <div className="flex gap-1 items-center ">
          <img
            className="rounded-full w-14 h-14"
            src={ProfileImage}
            alt="ProfileImage"
          />
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#828282"
              strokeWidth="2" // Use "strokeWidth" instead of "stroke-width"
              strokeLinecap="round" // Use "strokeLinecap" instead of "stroke-linecap"
              strokeLinejoin="round" // Use "strokeLinejoin" instead of "stroke-linejoin"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 flex flex-col gap-3 items-center">
        <Link to={"/reset-password"} className=" w-full">
          <Button className="bg-slate-300 hover:bg-slate-400 text-black w-full ">
            Reset Password
          </Button>
        </Link>
        <Button className="bg-red-500 w-full hover:bg-red-600" onClick={logout}>
          Log Out
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
