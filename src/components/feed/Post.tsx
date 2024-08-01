import Image from "next/image";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Anne Watts</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* description */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/2086622/pexels-photo-2086622.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          animi cupiditate aliquid nihil reiciendis! Quas nemo sint
          exercitationem. Minima, repudiandae. Aperiam blanditiis cumque dolore
          ut ipsam, qui tempore nemo velit!
        </p>
      </div>
      {/* Interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>{" "}
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
        <Image
          src="/comment.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span> </span>
        </div>
        </div>
        <div className="">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
        <Image
          src="/share.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 ">123<span className="hidden md:inline"> Share</span> </span>
        </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
