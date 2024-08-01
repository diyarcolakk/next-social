"use client";
import React from "react";
import Image from "next/image";
import { FollowRequest, User } from "@prisma/client";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  return (
    <>
      {requests.map((request) => (
        <>
          <div className="flex items-center justify-between" key={request.id}>
            <div className="flex items-center gap-4">
              <Image
                src="https://images.pexels.com/photos/27140162/pexels-photo-27140162/free-photo-of-moda-adam-ask-sevgi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>Glen McCormick</span>
            </div>
            <div className="flex gap-3 justify-end">
              <Image
                src="/accept.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/reject.png"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default FriendRequestList;
