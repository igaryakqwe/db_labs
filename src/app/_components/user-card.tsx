'use client';

import { FC, useState } from 'react';
import { User } from "@/types/user";
import DeleteDialog from "@/app/_components/delete-dialog";
import UpdateDialog from "@/app/_components/update-dialog";

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between gap-60 my-6 w-200 h-15" >
        <div className="flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 pr-4 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-7 description-7" role="graphics-symbol">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className="flex-col">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.gender}</p>
          </div>
        </div>
        <div>
          <UpdateDialog user={user} />
          <button onClick={() => openModal()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:fill-gray-800 transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
      <DeleteDialog userId={user.id} isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default UserCard;
