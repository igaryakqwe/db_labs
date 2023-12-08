import { FC } from 'react';
import { User } from "@/types/user";
import DeleteDialog from "@/app/_components/delete-dialog";
import UpdateDialog from "@/app/_components/update-dialog";
import Link from "next/link";

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-60 my-6 w-200 h-15" >
      <Link href={`/${user.id}`} className="flex flex-row">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 pr-4 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-7 description-7" role="graphics-symbol">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <div className="flex-col">
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-600">{user.gender}</p>
        </div>
      </Link>
      <div className="pl-10">
        <UpdateDialog user={user} />
        <DeleteDialog userId={user.id} />
      </div>
    </div>
  );
};

export default UserCard;
