import { FC } from 'react';
import prisma from "@/lib/db";
import UpdateDialog from "@/app/_components/update-dialog";
import DeleteDialog from "@/app/_components/delete-dialog";

interface PageProps {
  params: {
    id: string;
  };
}

const UserPage: FC<PageProps> = async ({ params: { id }}) => {
  const user = await prisma.user.findUnique({
    where: {
      id: +id,
    },
  })

  if (!user) return <div className="text-xl">404</div>;

  return (
    <div className="w-2/3 p-8">
      <div className="flex flex-col gap-10 my-6 w-200 h-15" >
        <div className="flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 pr-4 top-3 left-4 stroke-slate-400 peer-disabled:cursor-not-allowed" fill="none" aria-hidden="true" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-labelledby="title-7 description-7" role="graphics-symbol">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div className="flex-col">
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 text-xl">
              <span className="font-bold text-gray-400">Email: </span>
              {user.mail}
            </p>
            <p className="text-gray-600 text-xl">
              <span className="font-bold text-gray-400">Password: </span>
              {user.password}
            </p>
            <p className="text-gray-600 text-xl">
              <span className="font-bold text-gray-400">Age: </span>
              {user.age}
            </p>
            <p className="text-gray-600 text-xl">
              <span className="font-bold text-gray-400">Gender: </span>
              {user.gender}
            </p>
          </div>
        </div>
        <div>
          <UpdateDialog user={user} />
          <DeleteDialog userId={user.id} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
