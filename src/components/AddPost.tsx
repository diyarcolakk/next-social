import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm '>
      {/* Avatar */}
      <div className="">
        <Image src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' width={48} height={48} className='w-12 h-12 object-cover rounded-full'/>
      </div>
      {/* Post */}
      <div className="">
        {/* TextInput  */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind" className=' bg-slate-100 rounded-lg'></textarea>
        <Image src="/emoji.png" alt='' width={20} height={20} className='w-5 h-5 cursor-pointer self-end'/>

        </div>
        {/* post options  */} 
        <div className=""></div>
      </div>
    </div>
  )
}

export default AddPost
