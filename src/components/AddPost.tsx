import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import prisma from "@/lib/client";
const AddPost = () => {


  const {userId} = auth()


  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm ">
      {/* Avatar */}
      <div className="">
        <Image
          src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      {/* Post */}
      <div className="flex-1">
        {/* TextInput  */}
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What's on your mind"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button>Send </button>
        </form>
        {/* post options  */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addvideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
