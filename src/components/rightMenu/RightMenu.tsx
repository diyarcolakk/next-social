import Ad from "../Ad";
import Birtdays from "./Birtdays";
import FriendRequest from "./FriendRequest";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";
import { Suspense } from "react";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequest />
      <Birtdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
