import { UserIcon } from "@heroicons/react/solid";

const MyProfile = () => {
  return (
    <div
      className={
        "rounded-full p-2 flex items-center justify-center w-fit mr-auto"
      }
    >
      <UserIcon className={"w-6 h-6 "} />
    </div>
  );
};

export default MyProfile;
