import Link from "next/link";
import React from "react";
import Image from "next/image";
const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* Bottom */}
      <div className="">
        <div className="flex gap-4 justify-between flex-wrap">
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
          <div className="relative w-1/5 h-24">
            <Image src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className="object-cover rounded-md"/>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default UserMediaCard;
