import Ad from "./Ad"
import Birtdays from "./Birtdays"
import FriendRequest from "./FriendRequest"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"


const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (<>
      <UserInfoCard userId={userId}/>
      <UserMediaCard userId={userId}/>
      </>) : null}
      <FriendRequest/>
      <Birtdays/>
      <Ad size="md"/>

    </div>
  )
}

export default RightMenu
